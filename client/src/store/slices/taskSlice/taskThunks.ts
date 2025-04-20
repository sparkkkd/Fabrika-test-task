import { createAsyncThunk } from '@reduxjs/toolkit'

import { TaskService } from '../../../api/services/TaskService'
import { ITask } from '../../../models/task.model'

export const getAllTasks = createAsyncThunk(
	'tasks/getAll',
	async (_, { rejectWithValue }) => {
		try {
			const response = await TaskService.getAll()
			return response.data
		} catch (error) {
			rejectWithValue(error)
		}
	}
)

export const getOneTask = createAsyncThunk(
	'tasks/getOne',
	async (id: string, { rejectWithValue }) => {
		try {
			const response = await TaskService.getOne(id)
			return response.data
		} catch (error) {
			rejectWithValue(error)
		}
	}
)

export const updateTask = createAsyncThunk(
	'tasks/update',
	async (task: ITask, { rejectWithValue }) => {
		try {
			const response = await TaskService.update(task)
			return response.data
		} catch (error) {
			rejectWithValue(error)
		}
	}
)

export const deleteTask = createAsyncThunk(
	'tasks/delete',
	async (id: string, { rejectWithValue }) => {
		try {
			const response = await TaskService.delete(id)
			return response.data
		} catch (error) {
			rejectWithValue(error)
		}
	}
)

export const createTask = createAsyncThunk(
	'tasks/create',
	async (task: Omit<ITask, 'id'>, { rejectWithValue }) => {
		try {
			const response = await TaskService.create(task)
			return response.data
		} catch (error) {
			rejectWithValue(error)
		}
	}
)
