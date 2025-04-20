import { FC, useState } from 'react'
import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'

import { useAppDispatch } from '../../store/hooks'
import { deleteTask, updateTask } from '../../store/slices/taskSlice/taskThunks'

import { EditTaskForm } from '../EditTaskForm/EditTaskForm'
import { Checkbox } from '@gravity-ui/uikit'

import { MdOutlineModeEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'

import { ITaskWithInfo } from '../../models/task.model'

import styles from './Task.module.sass'

interface TaskProps {
	classname?: string
	task: ITaskWithInfo
}

const taskVariants: Variants = {
	initial: {
		opacity: 0,
		filter: 'blur(1px)',
		y: 100,
		transition: { duration: 0.7, ease: [0.45, 0.05, 0.55, 0.95] },
	},

	animate: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 0.7, ease: [0.45, 0.05, 0.55, 0.95] },
	},

	exit: {
		opacity: 0,
		x: 100,
		transition: { duration: 0.7, ease: [0.45, 0.05, 0.55, 0.95] },
	},
}

export const Task: FC<TaskProps> = ({ classname, task }) => {
	const [isEditMode, setIsEditMode] = useState<boolean>(false)

	const dispatch = useAppDispatch()

	return (
		<motion.li variants={taskVariants} className={clsx(classname, styles.task)}>
			<Checkbox
				className={styles.checkbox}
				size='xl'
				checked={task.completed}
				onChange={() =>
					dispatch(updateTask({ ...task, completed: !task.completed }))
				}
			/>
			<div className={styles.group}>
				{isEditMode ? (
					<EditTaskForm
						taskId={task.id}
						taskTitle={task.title}
						setIsEditMode={setIsEditMode}
					/>
				) : (
					<p className={clsx(styles.title, task.completed && styles.completed)}>
						{task.title}
					</p>
				)}
				<p className={styles.subtitle}>
					{task.completed ? 'Выполнено' : 'Не выполнено'}
				</p>
			</div>
			{!isEditMode && (
				<div className={styles.actions}>
					<MdOutlineModeEdit
						className={styles.edit}
						onClick={() => setIsEditMode(true)}
					/>
					<MdDelete
						className={styles.delete}
						onClick={() => dispatch(deleteTask(task.id))}
					/>
				</div>
			)}
		</motion.li>
	)
}
