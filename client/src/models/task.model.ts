export interface ITaskWithInfo extends ITask {
	updatedAt: string
	createdAt: string
}

export interface ITask {
	id: string
	title: string
	completed?: boolean
}
