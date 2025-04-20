import { $api } from '../api'

import { ITask, ITaskWithInfo } from '../../models/task.model'

export class TaskService {
	static async getAll() {
		return $api.get<ITaskWithInfo[]>('/tasks')
	}

	static async getOne(id: string) {
		return $api.get<ITaskWithInfo>(`/tasks/${id}`)
	}

	static async create(task: Omit<ITask, 'id'>) {
		return $api.post<ITaskWithInfo>('/tasks', task)
	}

	static async update(task: ITask) {
		return $api.put<ITaskWithInfo>(`/tasks/${task.id}`, task)
	}

	static async delete(id: string) {
		return $api.delete<ITaskWithInfo>(`/tasks/${id}`)
	}
}
