import { Container } from './modules/Container/Container'
import { Header } from './modules/Header/Header'
import { AddTask } from './modules/AddTask/AddTask'

import './App.sass'
import { TaskList } from './modules/TaskList/TaskList'

function App() {
	return (
		<Container>
			<Header />
			<AddTask />
			<TaskList />
		</Container>
	)
}

export default App
