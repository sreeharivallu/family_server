// import express from "express";
// import dotenv from "dotenv";
// import winston from "winston";

// // initialize configuration
// dotenv.config();

// // port is now available to the Node.js runtime
// // as if it were an environment variable
// const port = process.env.SERVER_PORT;

// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     defaultMeta: { service: 'user-service' },
//     transports: [
//       //
//       // - Write all logs with level `error` and below to `error.log`
//       // - Write all logs with level `info` and below to `combined.log`
//       //
//       new winston.transports.File({ filename: 'error.log', level: 'error' }),
//       new winston.transports.File({ filename: 'combined.log' }),
//     ],
//   });

//   //
//   // If we're not in production then log to the `console` with the format:
//   // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//   //
//   if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//       format: winston.format.simple(),
//     }));
//   }

// const app = express();

// // define a route handler for the default home page
// app.get( "/", ( req, res ) => {
//     res.send( "Hello world!" );
// } );

// // start the Express server
// app.listen( port, () => {
//     logger.info( `server started at http://localhost:${ port }` );
// });


import App from './providers/App';

App.loadDatabase();
App.loadServer();