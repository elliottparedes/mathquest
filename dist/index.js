var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const database = require('./config/databaseConnection');
const server = require('./config/server');
require("dotenv").config();
const initializeApp = () => __awaiter(this, void 0, void 0, function* () {
    try {
        yield database.connect();
        yield server.start();
    }
    catch (error) {
        console.error('Error initializing the app:', error);
        process.exit(1);
    }
});
initializeApp();
