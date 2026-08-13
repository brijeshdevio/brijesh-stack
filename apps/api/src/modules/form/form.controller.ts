import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ZodValidationPipe } from 'nestjs-zod';
import { FormService } from './form.service';
import { ContactDto, ContactSchema } from './dto/contact.schema';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('contact')
  @HttpCode(HttpStatus.OK)
  async contact(@Body(new ZodValidationPipe(ContactSchema)) body: ContactDto) {
    await this.formService.contact(body);

    return {
      message: 'Your message has been submitted successfully.',
    };
  }
}
