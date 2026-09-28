import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { MainContent } from './components/Content'
import ClickPractice from './components/ClickPractice'
import InputPractice from './components/InputPractice'
import FormPractice from './components/FormPractice'
import ActionButton from './components/ActionButton'

function App() {
  const saveAction = () => {
    console.log('Сохранено')
  }
  const deleteAction = () => {
    console.log('Удалено')
  }
  return (
    <>
      <Header />
      <MainContent>
        <ClickPractice />
        <InputPractice />
        <FormPractice />
        <ActionButton text="Сохранить" callback={saveAction} />
        <ActionButton text="Удалить" callback={deleteAction} />
      </MainContent>
      <Footer />
    </>
  )
}

export default App
