import { Module } from '@nestjs/common';

import { HealthController } from '@/infrastructure/controllers';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [],
})
export class InfrastructureModule {}
