import * as emoji from 'node-emoji';
import { Logger } from '@nestjs/common';

const logger = new Logger('日志');

const chalk = require('chalk');

export default function MiddlewareAll() {
  return (req, res, next) => {
    logger.log(chalk.green.bold.underline(`${req.url}`));
    next();
  };
}
