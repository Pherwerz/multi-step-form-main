import { z } from 'zod';

export interface IInfoform {
  name: string;
  email: string;
  phoneNumber: string;
}

export const infoSchema = z
  .object({
    name: z.string().nonempty('This field is required'),
    email: z
      .string()
      .nonempty('This field is required')
      .email('Enter a valid email address'),
    phoneNumber: z.string().nonempty('This field is required'),
  })
  .required();
