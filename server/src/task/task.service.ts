import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.client'

import { TaskDto } from './dto/task.dto'

@Injectable()
export class TaskService {
	constructor(private readonly prisma: PrismaService) {}

	async getById(id: string) {
		const task = await this.prisma.task.findUnique({ where: { id } })

		if (!task) throw new NotFoundException('Задача не найдена')

		return task
	}

	async getAll() {
		const tasks = await this.prisma.task.findMany()

		if (!tasks) throw new NotFoundException('Задачи не найдены')

		return tasks
	}

	async create(dto: TaskDto) {
		const task = await this.prisma.task.create({
			data: {
				title: dto.title,
			},
		})

		return task
	}

	async update(id: string, dto: TaskDto) {
		return this.prisma.task.update({
			where: { id },
			data: {
				title: dto.title,
				completed: dto.completed && dto.completed,
			},
		})
	}

	async delete(id: string) {
		return this.prisma.task.delete({ where: { id } })
	}
}
