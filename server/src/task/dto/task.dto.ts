import { IsString } from 'class-validator'

export class TaskDto {
	@IsString({ message: 'Введите название задачи' })
	title: string
}
