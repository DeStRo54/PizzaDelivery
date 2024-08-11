import * as z from 'zod';

export const PersonSheme = z.object({
  lastname: z.string().min(3, { message: 'Фамилия должна быть больше 3 символов' }),
  firstname: z.string().min(3, { message: 'Имя должно быть больше 3 символов' }),
  middlename: z.string().min(3, { message: 'Отчество должно быть больше 3 символов' }),
  phone: z.string().min(12, { message: 'Поле обязательно для заполнения' }),
  email: z.string().email({ message: 'Неверный email' }),
  adress: z
    .string()
    .min(1, { message: 'Поле обязательно для заполнения' })
    .refine((value) => value.trim().split(', ').length == 4, { message: 'Некорректный адрес' })
});

export type PersonSheme = z.infer<typeof PersonSheme>;
