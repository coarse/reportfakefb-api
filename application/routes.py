from flask import request, make_response, jsonify, send_from_directory, render_template
from flask import current_app as app
from flask_cors import cross_origin
from .models import db, Real, Fake
from uuid import UUID
import re


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    _exceptions = ['manifest.json', 'favicon.ico', 'logo192.png', 'logo512.png']
    print(path in _exceptions)
    if path in _exceptions:
        return send_from_directory('./public', path)

    return render_template('index.html')


def is_valid_uuid(uuid_to_test, version=4):
    try:
        uuid_obj = UUID(uuid_to_test, version=version)
    except ValueError:
        return False

    return str(uuid_obj) == uuid_to_test


@app.route('/reports', methods=['GET'])
@cross_origin()
def fetch_reports():
    '''Return all fake accounts from the databse'''
    accounts = Fake.query.order_by(Fake.created.desc()).all()
    return jsonify(dict(accounts=[x.serialize for x in accounts]))


@app.route('/reports/<string:_id>', methods=['GET'])
@cross_origin()
def fetch_report(_id):
    '''Return data from real account or fake account'''
    account = None
    if is_valid_uuid(_id):  # If _id is UUID, search via UUID
        account = Real.query.get(_id) or Fake.query.get(_id)
    else: # Otherwise, search via username
        username = _id
        account = Real.query.filter_by(username=username).first() or Fake.query.filter_by(username=username).first()

    if not account: # If no match was found, return 404
        return make_response(jsonify({
            'message': 'No such reported account found in the database'
        }), 404)
    
    return jsonify(account.serialize)

@app.route('/reports', methods=['POST'])
@cross_origin()
def add_reports():
    '''Add a report to the database'''
    data = request.get_json()

    username_regex = r'^(?:(?:https?:\/\/)?(?:m\.)?(?:(?:facebook|fb)\.com\/))?([.a-zA-Z0-9]+)(?:\/.*)?$'

    # validate real username
    real_username = ''
    username_search = re.search(username_regex, data['real'], re.IGNORECASE)
    if username_search:
        real_username = username_search.group(1)
    
    if real_username == '':
        # no valid username, return error
        return make_response(jsonify({
            'message': 'Real account username is invalid'
        }), 400)

    # validate fake usernames
    valid_fake_usernames = []
    for fake_username_text in data['fakes']:
        username_search = re.search(username_regex, fake_username_text, re.IGNORECASE)
        if username_search:
            valid_fake_usernames.append(username_search.group(1))
    
    if len(valid_fake_usernames) < 1:
        # no valid usernames, return error
        return make_response(jsonify({
            'message': 'No valid usernames were submitted'
        }), 400)

    # check if all valid fake usernames are in database
    fake_usernames = []
    for valid_fake_username in valid_fake_usernames:
        fake_account = Fake.query.filter_by(username=valid_fake_username).first()
        if not fake_account:
            fake_usernames.append(valid_fake_username)
    
    if len(fake_usernames) < 1:
        # all valid usernames have already been logged into the system, return error
        return make_response(jsonify({
            'message': 'All fake accounts submitted are already in the system'
        }), 400)

    # Fetch or create real account
    real_account = Real.query.filter_by(username=real_username).first()
    if real_account is None:  # No existing account found, creating new account
        real_account = Real(username=real_username)
        db.session.add(real_account)
        db.session.commit()

    # Loop through fake usernames
    for _ in fake_usernames:
        fake_account = Fake(username=_, real=real_account)
        db.session.add(fake_account)
        db.session.flush()
    db.session.commit()

    return jsonify(real_account.serialize)
