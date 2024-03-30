"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const statusCheckRoutes_1 = __importDefault(require("../routes/statusCheckRoutes"));
const problemRoutes_1 = __importDefault(require("../routes/problemRoutes"));
const loggerMiddleware_1 = __importDefault(require("../middlewares/loggerMiddleware"));
const corsMiddleware_1 = __importDefault(require("../middlewares/corsMiddleware"));
const corsOptions_1 = __importDefault(require("../config/corsOptions"));
const serverConnection = {
    start: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = (0, express_1.default)();
            // Static files middleware
            app.use(express_1.default.static('public'));
            // Body parser middleware
            app.use(body_parser_1.default.json());
            // configuring Cross Origin Request Sharing
            app.use(corsMiddleware_1.default);
            app.use((0, cors_1.default)(corsOptions_1.default));
            // Logger middleware
            app.use(loggerMiddleware_1.default);
            // Routes
            app.use(statusCheckRoutes_1.default);
            app.use(problemRoutes_1.default);
            // Start the server
            app.listen(process.env.PORT || 3000);
            console.info(`Node.js Express listening on port: ${process.env.PORT || 3000}`);
        }
        catch (error) {
            console.error('Error starting the server:', error);
            throw error;
        }
    }),
};
module.exports = serverConnection;
