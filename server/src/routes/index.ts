import express from 'express';
import healthRouter from './health';
import foodRouter from './food';

const indexRouter = express.Router();

// This file serves as the main router that combines all other routers (health, food, etc.)
//  and is used in app.ts to handle all routes starting with /api.
indexRouter.use('/health', healthRouter);
indexRouter.use('/food', foodRouter);

export default indexRouter;
