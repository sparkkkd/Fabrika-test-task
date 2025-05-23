import { combineReducers, configureStore } from '@reduxjs/toolkit'

import taskSlice from './slices/taskSlice/taskSlice'

const rootReducer = combineReducers({
	taskSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
