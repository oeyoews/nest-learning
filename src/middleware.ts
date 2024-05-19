import * as emoji from 'node-emoji';
import { Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const chalk = require('chalk');

export default function MiddlewareAll() {
  const logger = new Logger('日志(HTTP)');

  return (req: Request, res: Response, next: NextFunction) => {
    const { ip, method, originalUrl } = req;
    // const userAgent = req.get['user-agent'] || '';

    res.on('finish', () => {
      const { statusCode } = res;
      const color =
        statusCode >= 500 ? 'bgRed' : statusCode >= 400 ? 'yellow' : 'green';
      const emojiStatus =
        statusCode >= 500 ? '🔥' : statusCode >= 400 ? '⚠️' : '✅';
      logger.log(
        chalk.green.bold.underline(`${originalUrl} ${method}`),
        `${emoji.emojify(emojiStatus)} ${chalk[color](statusCode)}`,
      );
    });

    next();
  };
}
