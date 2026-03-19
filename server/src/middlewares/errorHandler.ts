import type { Request, Response, NextFunction } from "express";

// This middleware function is used to handle any unexpected errors that occur during request processing.
export function errorHandler(err: Error, Reqest: Request, res: Response, next: NextFunction) {
    
    console.log(err);

    res.status(500).json({
        message: "An unexpected error occurred",
        error: err.message
    });
}