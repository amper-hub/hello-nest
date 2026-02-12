import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello junnel!';
  }

  validateUser(username: string, password: string): boolean {
    return username === 'admin' && password === '1234';
  }
}
