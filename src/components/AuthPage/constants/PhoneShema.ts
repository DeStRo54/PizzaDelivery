import * as z from 'zod';

export const PhoneSheme = z.object({
  phone: z
    .string()
    .min(1, { message: 'Поле обязательно для заполнения' })
    .refine((value) => value.trim().length == 11, { message: 'Некорректный номер' })
});

export type PhoneSheme = z.infer<typeof PhoneSheme>;
