import SideBar from './containers/SideBar/sidebar'
import GlobalStyle, { Container } from './styles'
import TaskList from './containers/TaskList/task-list'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TaskList />
      </Container>
    </>
  )
}

export default App
