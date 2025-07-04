import { ERROR_MESSAGES } from '@/constants/messages';
import { z } from 'zod';

const formSchema = z.object({
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

const formSchemaSignup = z.object({
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
  firstName: z
    .string()
    .min(1, { message: ERROR_MESSAGES.FIRST_NAME.MIN })
    .max(50, { message: ERROR_MESSAGES.FIRST_NAME.MAX })
    .regex(/^[A-Za-z\s]+$/, { message: ERROR_MESSAGES.FIRST_NAME.INVALID }),
  lastName: z
    .string()
    .min(1, { message: ERROR_MESSAGES.LAST_NAME.MIN })
    .max(50, { message: ERROR_MESSAGES.LAST_NAME.MAX })
    .regex(/^[A-Za-z\s]+$/, { message: ERROR_MESSAGES.LAST_NAME.INVALID }),
});

export { formSchema, formSchemaSignup };
