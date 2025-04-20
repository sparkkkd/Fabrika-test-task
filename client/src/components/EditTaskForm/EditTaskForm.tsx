import { FC } from 'react'
import clsx from 'clsx'

import { Button, TextInput } from '@gravity-ui/uikit'

import { useForm } from 'react-hook-form'
import { ITaskSchema, taskSchema } from '../../models/task.schema'
import { zodResolver } from '@hookform/resolvers/zod'

import { useAppDispatch } from '../../store/hooks'
import { updateTask } from '../../store/slices/taskSlice/taskThunks'

import styles from './EditTaskForm.module.sass'

interface EditTaskFormProps {
	classname?: string
	taskTitle: string
	taskId: string
	setIsEditMode: (value: boolean) => void
}

export const EditTaskForm: FC<EditTaskFormProps> = ({
	classname,
	taskTitle,
	taskId,
	setIsEditMode,
}) => {
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ITaskSchema>({
		resolver: zodResolver(taskSchema),
		defaultValues: {
			title: taskTitle,
		},
	})

	const onSubmit = ({ title }: ITaskSchema) => {
		dispatch(updateTask({ id: taskId, title }))
		setIsEditMode(false)
	}

	return (
		<form
			className={clsx(classname, styles.form)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<TextInput
				{...register('title')}
				validationState={errors.title ? 'invalid' : undefined}
				errorMessage={errors.title?.message}
				className={styles.input}
			/>
			<Button type='submit'>Сохранить</Button>
		</form>
	)
}
