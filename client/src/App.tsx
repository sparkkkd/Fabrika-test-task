import { Container } from './modules/Container/Container'
import { Header } from './modules/Header/Header'
import { AddTask } from './modules/AddTask/AddTask'
import { TaskList } from './modules/TaskList/TaskList'

import './App.sass'

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
