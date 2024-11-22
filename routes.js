import { json } from 'body-parser';
import person from './routes/person';

export default (app) => {
    app.use(
        json(),
        person,
    )
}