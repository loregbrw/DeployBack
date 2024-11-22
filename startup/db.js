import { connect } from 'mongoose';
import { get } from 'config';

export default function () {
    const db = get('db');
    connect(db)
        .then(() => console.log(`connected to ${db}`));
}