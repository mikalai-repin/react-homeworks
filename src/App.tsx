import './App.css'

const Header: React.FC = () => {
  return <header>React Education Project</header>
}

const Section = () => {
  return (
    <section>
      <h1>React + Vite + TypeScript</h1>
      <p>
        Это учебный проект на React, созданный для практики работы с
        компонентами и Git.
      </p>
      <p>Дополнительная информация о проекте...</p>
    </section>
  )
}

const MainContent = () => {
  return (
    <main>
      <Section />
    </main>
  )
}

const Footer = () => {
  return <footer>{new Date().getFullYear()}</footer>
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
