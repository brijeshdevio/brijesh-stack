import { Injectable } from '@nestjs/common';
import { ContactDto } from './dto/contact.schema';
import { EmailService } from '../../email/email.service';

@Injectable()
export class FormService {
  constructor(private readonly emailService: EmailService) {}

  async contact(body: ContactDto): Promise<void> {
    await this.emailService.contactSendEmail(body);
  }
}
