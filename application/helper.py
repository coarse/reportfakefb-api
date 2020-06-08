from sqlalchemy import or_
from .models import Real, Fake, db

from .constants import username_regex
import re

def clean_data():
    dirty_real_accounts = Real.query.filter(
        or_(
            Real.username.contains('facebook.com'),
            Real.username.contains('fb.com')
        )
    )

    for account in dirty_real_accounts:
        username = account.username

        username_search = re.search(username_regex, username, re.IGNORECASE)
        if username_search:
            account.username = username_search.group(1)
            db.session.add(account)
        else:
            db.session.delete(account)
        
        db.session.commit()

    dirty_fake_accounts = Fake.query.filter(
        or_(
            Fake.username.contains('facebook.com'),
            Fake.username.contains('fb.com')
        )
    )

    for account in dirty_fake_accounts:
        username = account.username

        username_search = re.search(username_regex, username, re.IGNORECASE)
        if username_search:
            account.username = username_search.group(1)
            db.session.add(account)
        else:
            db.session.delete(account)
        
        db.session.commit()
