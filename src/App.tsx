import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { MainContent, Section } from './components/Content'
import Counter from './components/Counter'
import ToggleText from './components/ToggleText'
import LiveInput from './components/LiveInput'
import ColorText from './components/ColorText'

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Section />
        <Counter />
        <ToggleText />
        <LiveInput />
        <ColorText />
      </MainContent>
      <Footer />
    </>
  )
}

export default App
