"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoggingMiddleWare = (req, res, next) => {
    console.log('IP is ' + req.ip);
    next();
};
exports.default = LoggingMiddleWare;
