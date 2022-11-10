const express = require('express');

const app = express();
const data = require('../Controllers/dataBase');

const dataRouter = express.Router()

dataRouter.route('/posts').get(data.postDataControllers);

module.exports = dataRouter;