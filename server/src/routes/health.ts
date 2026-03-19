import express from 'express';

const healthRouter = express.Router();

healthRouter.get('/', (req, res) => {
    res.status(200).json({ status: 'Health router is working' })
});

export default healthRouter;
