import { FC } from 'react'
import clsx from 'clsx'

import { Checkbox } from '@gravity-ui/uikit'

import { MdOutlineModeEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'

import { ITaskWithInfo } from '../../models/task.model'

import styles from './Task.module.sass'

interface TaskProps {
	classname?: string
	task: ITaskWithInfo
}

export const Task: FC<TaskProps> = ({ classname, task }) => {
	return (
		<li className={clsx(classname, styles.task)}>
			<Checkbox className={styles.checkbox} size='xl' />
			<div className={styles.group}>
				<p className={styles.title}>{task.title}</p>
				<p className={styles.subtitle}>
					{task.completed ? 'Выполнено' : 'Не выполнено'}
				</p>
			</div>
			<MdOutlineModeEdit className={styles.edit} />
			<MdDelete className={styles.delete} />
		</li>
	)
}
