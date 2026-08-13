import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { EmailModule } from '../../email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
