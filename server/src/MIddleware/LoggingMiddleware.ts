import { RequestHandler } from "express-serve-static-core"

const LoggingMiddleWare: RequestHandler = (req, res, next) => {
    console.log('IP is ' + req.ip);
    next();
}

export default LoggingMiddleWare;