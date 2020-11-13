import apiRouter from '../routes/Api';
import memberRouter from '../routes/Member'
import { Application } from 'express';


class Routes {
    public mountApi(_express: Application):Application {
       return _express.use('/',apiRouter);
    }

    public mountMemberApi(_express: Application):Application {
        return _express.use('/',memberRouter);
     }
}

export default new Routes();