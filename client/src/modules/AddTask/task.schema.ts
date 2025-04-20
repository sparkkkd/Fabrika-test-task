import { z } from 'zod'

export const taskSchema = z.object({
	title: z.string().min(1, { message: 'Задача не может быть пустым' }),
})

export interface ITaskSchema extends z.infer<typeof taskSchema> {}
