import Express from './Express';
import { Database } from './Database';
import Logger from '../middlewares/Logger'

class App {

    public async loadDatabase(){
        Logger.info("Loading Database");
        try{
            await Database.init();
            Logger.info("Loaded Database");
        }catch(err){
            Logger.info(err);
        }

    }

    public loadServer(){
        Logger.info("Loading Server");
        Express.init();
    }
}

export default new App();