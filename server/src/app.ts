//Creates and configures the Express app (middlewares, routes)
import express from "express";
import cors from "cors"; 
import indexRouter from "./routes/index";
import { notFoundHandler } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import morgan from "morgan";

const app = express();

// Allows see in the server terminal which endpoint was called response status (200/400/500) 
app.use(morgan("dev"));

//This allows only requests coming from that browser origin to access the server, and also allows
// cookies to be sent in cross-origin requests (credentials: true).
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// lets Express read JSON bodies
app.use(express.json()); 

// Use the index router for all routes starting with /api
app.use("/api", indexRouter);


// If no route was matched, this middleware return a 404 response.
app.use(notFoundHandler);

// This middleware will catch any error in the route handlers and return a 500 response with the error message.
app.use(errorHandler);

export default app;