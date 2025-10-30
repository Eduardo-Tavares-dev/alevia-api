import { Controller, Get } from '@nestjs/common';

import { Public } from '@/auth/decorators';

@Public()
@Controller('healthcheck')
export class HealthController {
  @Get()
  checkHealth() {
    return {
      status: 'OK',
    };
  }
}
