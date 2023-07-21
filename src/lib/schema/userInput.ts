import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  email: string()
    .min(1, {message: 'email is required'})
    .email({ message: 'invalid email' }),
  username: string().min(1, {message: 'username is required'}),
  password: string().min(6, {message: 'password must be more than six characters'}),
  passwordConfirmation: string().min(1, {
    message: 'Confirm Password is required',
  }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'Passwords do not match',
  path: ['passwordConfirmation'],
});

export const createSessionSchema = object({
  email: string()
    .min(1, 'email is required')
    .email({ message: 'invalid email' }),
  password: string().min(6, 'password must be more than six characters'),
});

export type createUserInput = TypeOf<typeof createUserSchema>;
export type createSessionInput = TypeOf<typeof createSessionSchema>;