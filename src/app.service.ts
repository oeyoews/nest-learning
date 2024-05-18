import { Injectable } from '@nestjs/common';
import { Girl } from './girl/entities/girl.entity';

/** A basic service with a single method. */
@Injectable()
export class AppService {
  constructor() {}
  getHello(): string {
    return 'Hello World, NestJs!';
  }
}
