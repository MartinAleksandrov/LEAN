import express from 'express';

const foodRouter = express.Router();

foodRouter.get('/', (req, res) => {
    res.status(200).json({ status: 'Food route is working!' })
});

export default foodRouter;
