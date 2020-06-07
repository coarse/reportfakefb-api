## Report Fake FB API

Just a simple Flask + SQLAlchemy application used to collate information on fake Facebook accounts.

Usernames of genuine accounts are stored as an identifier used to connect reports done at different times. However, these usernames are not shown via the API ([application/models.py#L23](https://github.com/coarse/reportfakefb-api/blob/master/application/models.py#L23)) to protect the privacy of the person.

Cross-origin resource sharing is enabled on the two GET endpoints.

Reports are strictly to be entered via the [application](https://reportfakefbph.herokuapp.com/).

### Todo

- Add delete endpoint

### API endpoints

- GET /reports (Fetch fake accounts)
- GET /reports/<UUID/username> (Fetch real/fake account information)
- POST /reports/add (Report fake accounts linked to a genuine account)