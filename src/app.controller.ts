import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Existing endpoints...

  @Get('square/:n')
  square(@Param('n') n: string) {
    const value = Number(n);
    if (!Number.isFinite(value)) {
      throw new BadRequestException('n must be a number');
    }
    return { n: value, square: value * value };
  }
}
