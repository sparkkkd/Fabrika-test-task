import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { TaskService } from './task.service'
import { TaskDto } from './dto/task.dto'

@Controller('tasks')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Get()
	async getAll() {
		return this.taskService.getAll()
	}

	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.taskService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	async create(@Body() dto: TaskDto) {
		return this.taskService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	async update(@Body() dto: TaskDto, @Param('id') id: string) {
		return this.taskService.update(id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.taskService.delete(id)
	}
}
