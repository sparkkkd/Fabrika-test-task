import { createSlice } from '@reduxjs/toolkit'
import { ITaskWithInfo } from '../../../models/task.model'
import { createTask, getAllTasks, updateTask } from './taskThunks'

interface IInitialState {
	tasks: ITaskWithInfo[]
	isLoading: boolean
	errorMessage: string
}

const initialState: IInitialState = {
	tasks: [],
	isLoading: false,
	errorMessage: '',
}

const taskSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Start getAllTasks
		builder.addCase(getAllTasks.pending, (state) => {
			state.errorMessage = ''
			state.isLoading = true
		})
		builder.addCase(getAllTasks.fulfilled, (state, { payload }) => {
			state.errorMessage = ''
			state.isLoading = false
			if (payload) state.tasks = payload
		})
		builder.addCase(getAllTasks.rejected, (state, action) => {
			state.errorMessage = action.error.message || ''
			state.isLoading = false
		})
		// End getAllTasks

		// Start createTask
		builder.addCase(createTask.pending, (state) => {
			state.errorMessage = ''
			state.isLoading = true
		})
		builder.addCase(createTask.fulfilled, (state, { payload }) => {
			state.errorMessage = ''
			state.isLoading = false
			if (payload) state.tasks.push(payload)
		})
		builder.addCase(createTask.rejected, (state, action) => {
			state.errorMessage = action.error.message || ''
			state.isLoading = false
		})
		// End createTask

		// Start updateTask
		builder.addCase(updateTask.pending, (state) => {
			state.errorMessage = ''
			state.isLoading = true
		})
		builder.addCase(updateTask.fulfilled, (state, { payload }) => {
			state.errorMessage = ''
			state.isLoading = false
			if (payload)
				state.tasks = state.tasks.map((task) =>
					task.id === payload.id ? payload : task
				)
		})
		builder.addCase(updateTask.rejected, (state, action) => {
			state.errorMessage = action.error.message || ''
			state.isLoading = false
		})
		// End updateTask
	},
})

export default taskSlice.reducer
