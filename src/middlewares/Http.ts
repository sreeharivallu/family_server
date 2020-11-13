import * as bodyParser from 'body-parser';
import { Application } from 'express';

class Http{
    public static loadBodyParser(_express: Application): Application {
        _express.use(bodyParser.urlencoded({ extended: false }));
        _express.use(bodyParser.json());

        return _express;
    }
}

export default Http;
