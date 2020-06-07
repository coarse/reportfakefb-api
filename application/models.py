from . import db
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
import uuid


class Real(db.Model):
    """Data model for real accounts."""

    id = db.Column(UUID(as_uuid=True), default=uuid.uuid4, primary_key=True)
    username = db.Column(db.String(80), index=True, unique=True,nullable=False)
    
    created = db.Column(db.DateTime(timezone=True), server_default=func.now())

    fakes = db.relationship('Fake', backref='fake', lazy=True)

    def __repr__(self):
        return '<User {}>'.format(self.username)
    
    @property
    def serialize(self):
        return {
            'id': self.id,
            'fakes_id': [x.id for x in self.fakes],
            'created_at': self.created
        }


class Fake(db.Model):
    """Data model for fake accounts."""

    id = db.Column(UUID(as_uuid=True), default=uuid.uuid4, primary_key=True)
    username = db.Column(db.String(80), index=True, unique=True,nullable=False)
    
    created = db.Column(db.DateTime(timezone=True), server_default=func.now())

    real = db.Column(UUID(as_uuid=True), db.ForeignKey('real.id'))

    def __repr__(self):
        return '<User {}>'.format(self.username)
    
    @property
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'real_id': self.real,
            'created_at': self.created
        }
