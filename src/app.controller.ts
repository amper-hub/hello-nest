import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {

  @Post('login')
  login(@Body() body: any) {
    const { username, password } = body;

    if (username === 'admin' && password === '1234') {
      return 'Login successful ✅';
    }

    return 'Invalid credentials ❌';
  }
}
