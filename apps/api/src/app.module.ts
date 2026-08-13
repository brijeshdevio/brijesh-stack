import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { FormModule } from './modules/form/form.module';

@Module({
  imports: [EmailModule, FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
