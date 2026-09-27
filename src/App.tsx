import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { MainContent, Section } from './components/Content'
import UserProfile from './components/UserProfile'
import TasksList from './components/TasksList'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Section />
        <UserProfile />
        <TasksList />
        <Cart />
      </MainContent>
      <Footer />
    </>
  )
}

export default App
