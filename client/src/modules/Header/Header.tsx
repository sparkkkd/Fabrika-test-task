import { FC } from 'react'

import styles from './Header.module.sass'
import clsx from 'clsx'

interface HeaderProps {
	classname?: string
}

export const Header: FC<HeaderProps> = ({ classname }) => {
	return (
		<header className={clsx(classname, styles.header)}>
			<h1 className={styles.title}>Fabrika Todo App</h1>
		</header>
	)
}
