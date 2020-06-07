from . import db
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
import uuid


class Real(db.Model):
    """Data model for real accounts."""

    id = db.Column(UUID(as_uuid=True), default=uuid.uuid4, primary_key=True)
    username = db.Column(db.String(80), index=True, unique=True, nullable=False)
    
    created = db.Column(db.DateTime(timezone=True), server_default=func.now())

    fakes = db.relationship('Fake', cascade='all,delete', backref='fake', lazy=True)

    def __repr__(self):
        return '<User {}>'.format(self.username)
    
    @property
    def serialize(self):
        return {
            'id': self.id,
            'similar': [dict(id=x.id, username=x.username) for x in self.fakes],
            'created_at': self.created
        }


class Fake(db.Model):
    """Data model for fake accounts."""

    id = db.Column(UUID(as_uuid=True), default=uuid.uuid4, primary_key=True)
    username = db.Column(db.String(80), index=True, unique=True, nullable=False)
    
    created = db.Column(db.DateTime(timezone=True), server_default=func.now())

    real_id = db.Column(UUID(as_uuid=True), db.ForeignKey('real.id'))
    real = db.relationship('Real')

    def __repr__(self):
        return '<User {}>'.format(self.username)
    
    @property
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'real_id': self.real_id,
            'similar': [dict(id=x.id, username=x.username) for x in self.real.fakes if x.id != self.id],
            'created_at': self.created
        }
