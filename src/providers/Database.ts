import mongoose from 'mongoose';
import Locals from './Locals';
import Logger from '../middlewares/Logger';


export class Database {

    public static async init(): Promise<any>{

        const dsn = Locals.config();
        Logger.info("dsn:", Locals.config());
        return mongoose.connect(dsn.mongooseUrl, {
            useNewUrlParser: true // ,
        //    useUnifiedTopology: true,
        //    useFindAndModify: false,
        //    useCreateIndex: true
        });
    }

}

export default mongoose;