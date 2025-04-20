import { FC } from 'react'
import clsx from 'clsx'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ITaskSchema, taskSchema } from '../../models/task.schema'

import { useAppDispatch } from '../../store/hooks'
import { createTask } from '../../store/slices/taskSlice/taskThunks'

import { TextInput } from '@gravity-ui/uikit'
import { Button } from '@gravity-ui/uikit'

import styles from './AddTask.module.sass'

interface AddTaskProps {
	classname?: string
}

export const AddTask: FC<AddTaskProps> = ({ classname }) => {
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ITaskSchema>({
		resolver: zodResolver(taskSchema),
	})

	const onSubmit = (data: ITaskSchema) => {
		dispatch(createTask(data))
		reset()
	}

	return (
		<div className={clsx(classname)}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<TextInput
					className={styles.input}
					placeholder='Новая задача...'
					{...register('title')}
					validationState={errors.title ? 'invalid' : undefined}
					errorMessage={errors.title?.message}
				/>
				<Button type='submit'>Добавить</Button>
			</form>
		</div>
	)
}
