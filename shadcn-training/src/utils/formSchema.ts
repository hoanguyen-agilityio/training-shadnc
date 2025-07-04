import { ERROR_MESSAGES } from '@/constants/messages';
import { z } from 'zod';

export const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: ERROR_MESSAGES.EMAIL.MIN })
    .email({ message: ERROR_MESSAGES.EMAIL.INVALID }),
  password: z
    .string()
    .min(6, { message: ERROR_MESSAGES.PASSWORD.MIN })
    .max(50, { message: ERROR_MESSAGES.PASSWORD.MAX })
    .regex(/[A-Z]/, { message: ERROR_MESSAGES.PASSWORD.UPPERCASE })
    .regex(/[0-9]/, { message: ERROR_MESSAGES.PASSWORD.NUMBER }),
});
