import type { Request, Response, NextFunction } from "express";

// This middleware function is used to handle requests to routes that doesnt exist. 
export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
    res.status(404).json({
        message: "Route not Found",
        method: req.method,
        path: req.originalUrl
    });

}