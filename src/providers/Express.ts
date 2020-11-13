import express from 'express';
import Locals from './Locals';
import Logger from '../middlewares/Logger';
import Http from '../middlewares/Http';
import Routes from './Routes'


class Express {

    public express: express.Application;

    constructor(){
        this.express = express();
        this.mountDotEnv();
        this.mountMiddleWares();
        this.mountRoutes();

    }

    private mountDotEnv(){
        this.express = Locals.init(this.express);
    }

    private mountMiddleWares(){
        this.express = Http.loadBodyParser(this.express);
    }

    private mountRoutes (): void {
        this.express = Routes.mountApi(this.express);
        this.express = Routes.mountMemberApi(this.express);
	}

    public init(): any {
        const port = Locals.config().port;
        Logger.info( Locals.config() );
        this.express.listen(port, () => {
           Logger.info( `server started at http://localhost:${ port }` );
        });
    }

}

export default new Express();