import z from 'zod';

export const contactSchema = z.object({
	name: z.string().min(2, 'Name is required'),
	email: z.email('Invalid email address'),
	message: z.string().min(5, 'Message is required'),
});
