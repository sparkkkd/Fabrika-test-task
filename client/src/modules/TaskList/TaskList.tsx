import clsx from 'clsx'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getAllTasks } from '../../store/slices/taskSlice/taskThunks'

import { Task } from '../../components/Task/Task'

import styles from './TaskList.module.sass'

interface TaskListProps {
	classname?: string
}

export const TaskList: FC<TaskListProps> = ({ classname }) => {
	const { tasks } = useAppSelector((state) => state.taskSlice)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getAllTasks())
	}, [])

	return (
		<div className={clsx(classname, styles.wrapper)}>
			<ul className={styles.list}>
				{tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
			</ul>
		</div>
	)
}
