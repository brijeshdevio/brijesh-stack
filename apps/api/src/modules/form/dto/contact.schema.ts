import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const ContactSchema = z
  .object({
    name: z
      .string({ message: 'Name is required.' })
      .min(2, 'Name must be at least 2 characters.')
      .max(100, 'Name must not exceed 100 characters.'),

    email: z
      .email('Please provide a valid email address.')
      .max(255, 'Email must not exceed 255 characters.'),

    subject: z
      .string({ message: 'Subject is required.' })
      .min(3, 'Subject must be at least 3 characters.')
      .max(150, 'Subject must not exceed 150 characters.'),

    message: z
      .string({ message: 'Message is required.' })
      .min(10, 'Message must be at least 10 characters.')
      .max(5000, 'Message must not exceed 5000 characters.'),
  })
  .strict();

export class ContactDto extends createZodDto(ContactSchema) {}
