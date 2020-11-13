import * as dotenv from 'dotenv';
import * as path from 'path';
import { Application } from 'express'

class Locals {

    public static config(): any {

        dotenv.config({ path: path.join(__dirname, '../../.env') });
        // const port = process.env.SERVER_PORT || '8080';
        const mongooseUrl = 'mongodb+srv://sreehariv:YJROU5dkhczqslzc@cluster0.unq19.mongodb.net/testdb?retryWrites=true&w=majority'// process.env.MONGOOSE_URL;
		const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
        const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '50mb';

        return {
            mongooseUrl,
            port
        }

    }

    public static init(_express : Application): Application {
        _express.locals.app = this.config();
        return _express;
    }

}

export default Locals;