"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Logger Middleware
const loggerMiddleware = (req, res, next) => {
    // Only log requests that were sent to /addMessage or /addEvent
    // if not /addMessage or /addEvent we just continue to the next middleware
    if (req.url !== '/addMessage' && req.url !== '/addEvent') {
        return next();
    }
    // Log request method, URL, and timestamp
    console.log('Request received: \n' + `[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    // Log request headers
    console.log('Headers:', req.headers);
    // Log request body (for POST requests)
    if (req.method === 'POST' || req.method === 'PUT') {
        console.info('Body:', req.body);
    }
    // Log response body
    console.log(res.body ? 'Server response: \n' + res.body : '');
    // Continue to the next middleware or route handler
    next();
};
exports.default = loggerMiddleware;
