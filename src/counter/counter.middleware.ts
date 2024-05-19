import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';

const chalk = require('chalk');

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: Response, res: Request, next: () => void) {
    log(
      chalk.blue.bold(`${new Date().toLocaleString()} --`),
      chalk.green.bold.underline(`${req.url}`),
    );
    next();
  }
}
