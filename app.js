import express from 'express';
import Server from './modules/Server.js';

const app = module.exports.app = exports.app = express();
const server = new Server(app);