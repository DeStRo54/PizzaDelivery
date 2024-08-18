import * as z from 'zod';

export const UserSheme = z.object({
  lastname: z.string().min(1, { message: 'Поле обязательно для заполнения' }),
  firstname: z.string().min(1, { message: 'Поле обязательно для заполнения' }),
  middlename: z.string().min(1, { message: 'Поле обязательно для заполнения' }),
  phone: z.string(),
  email: z.string().email({ message: 'Неверный email' }),
  city: z.string().min(1, { message: 'Поле обязательно для заполнения' })
});

export type UserSheme = z.infer<typeof UserSheme>;
