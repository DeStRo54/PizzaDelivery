import * as z from 'zod';

export const OtpSheme = z.object({
  otp: z
    .string()
    .min(1, { message: 'Поле обязательно для заполнения' })
    .refine((value) => value.trim().length == 6, { message: 'Код должен содержать 6 цифр' })
});

export type OtpSheme = z.infer<typeof OtpSheme>;
