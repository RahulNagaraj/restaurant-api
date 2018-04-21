import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';

let router = express();

// Connect to db
initializeDb(db => {

  // Internal middleware
  router.use(middleware(config, db)); 

  // api routes (/v1)


});
export default router;
