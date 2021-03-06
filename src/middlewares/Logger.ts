import winston from "winston";

class Logger {
 //   public static init():any {
    public logger: any;

    constructor(){
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
              //
              // - Write all logs with level `error` and below to `error.log`
              // - Write all logs with level `info` and below to `combined.log`
              //
              new winston.transports.File({ filename: 'error.log', level: 'error' }),
              new winston.transports.File({ filename: 'combined.log' }),
            ],
        });
    }
}

export default new Logger().logger;