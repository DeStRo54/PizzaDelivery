import * as z from 'zod';

export const PaymentSheme = z.object({
  pan: z.string().min(9, { message: 'Поле обязательно для заполнения' }),
  expireDate: z.string().min(5, { message: 'Поле обязательно для заполнения' }),
  cvv: z.string().min(3, { message: 'Поле обязательно для заполнения' })
});

export type PaymentSheme = z.infer<typeof PaymentSheme>;
