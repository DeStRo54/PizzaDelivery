import * as z from 'zod';

export const PaymentSheme = z.object({
  pan: z
    .string()
    .min(1, { message: 'Поле обязательно для заполнения' })
    .refine((value) => value.trim().length == 8, {
      message: 'Некорректный номер карты'
    }),
  expireDate: z
    .string()
    .min(1, { message: 'Поле обязательно для заполнения' })
    .refine((value) => value.trim().replace(/\//g, '').length == 4, {
      message: 'Некорректная дата'
    }),
  cvv: z
    .string()
    .min(1, { message: 'Поле обязательно для заполнения' })
    .refine((value) => value.trim().length == 3, {
      message: 'Некорректная дата'
    })
});

export type PaymentSheme = z.infer<typeof PaymentSheme>;
