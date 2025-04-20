import clsx from 'clsx'
import { FC, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getAllTasks } from '../../store/slices/taskSlice/taskThunks'

import { Task } from '../../components/Task/Task'

import styles from './TaskList.module.sass'

interface TaskListProps {
	classname?: string
}

const taskContainerVariants: Variants = {
	animate: {
		transition: {
			staggerChildren: 0.05,
		},
	},
}

export const TaskList: FC<TaskListProps> = ({ classname }) => {
	const { tasks } = useAppSelector((state) => state.taskSlice)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getAllTasks())
	}, [])

	return (
		<div className={clsx(classname, styles.wrapper)}>
			{tasks.length !== 0 && (
				<motion.ul
					variants={taskContainerVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					className={styles.list}
				>
					{tasks.map((task) => (
						<Task key={task.id} task={task} />
					))}
				</motion.ul>
			)}
		</div>
	)
}
