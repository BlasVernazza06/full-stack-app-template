import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from '@/config/configuration';
import { envSchema } from '@/config/env.validator';
import { BetterAuthModule } from '@/core/better-auth.module';
import { DatabaseModule } from '@/modules/database/database.module';
import { UsersModule } from '@/modules/user/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validate: (config) => envSchema.parse(config),
      isGlobal: true,
    }),
    DatabaseModule,
    BetterAuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
