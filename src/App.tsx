import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { MainContent, Section } from './components/Content'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Section />
        <ParentComponent />
      </MainContent>
      <Footer />
    </>
  )
}

export default App
