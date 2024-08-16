import * as z from 'zod';

export const PersonSheme = z.object({
  lastname: z.string().min(1, { message: 'Поле обязательно для заполнения' }),
  firstname: z.string().min(1, { message: 'Поле обязательно для заполнения' }),
  middlename: z.string().min(1, { message: 'Поле обязательно для заполнения' }),
  phone: z
    .string()
    .min(1, { message: 'Поле обязательно для заполнения' })
    .refine((value) => value.trim().length == 11, {
      message: 'Некорректный номер'
    }),
  email: z.string().email({ message: 'Неверный email' }),
  adress: z
    .string()
    .min(1, { message: 'Поле обязательно для заполнения' })
    .refine((value) => value.trim().split(', ').length == 4, { message: 'Некорректный адрес' })
});

export type PersonSheme = z.infer<typeof PersonSheme>;
