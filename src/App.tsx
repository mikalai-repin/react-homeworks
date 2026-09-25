import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { MainContent, Section } from './components/Content'
import UserCard from './components/UserCard'

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Section />
        <UserCard
          name="Павел"
          role="Frontend-разработчик"
          experience={3}
          location={{ city: 'Минск', country: 'Беларусь' }}
          isAvailable={true}
        />
        <UserCard
          name="Андрей Иванов"
          role="Дизайнер"
          experience={3}
          location={{ city: 'Брест', country: 'Беларусь' }}
          isAvailable={false}
        />
        <UserCard
          name="Алексей Смирнов"
          role="Тестировщик"
          experience={4}
          location={{ city: 'Гомель', country: 'Беларусь' }}
          isAvailable={true}
        />
      </MainContent>
      <Footer />
    </>
  )
}

export default App
