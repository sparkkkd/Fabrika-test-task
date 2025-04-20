import clsx from 'clsx'
import React, { FC } from 'react'

import styles from './Container.module.sass'

interface ContainerProps extends React.PropsWithChildren {
	classname?: string
}

export const Container: FC<ContainerProps> = ({ classname, children }) => {
	return <div className={clsx(classname, styles.container)}>{children}</div>
}
