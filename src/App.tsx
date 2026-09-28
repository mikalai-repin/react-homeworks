import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { MainContent } from './components/Content'
import List from './components/List'
import { useRef, useState } from 'react'

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [list, setList] = useState([
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
  ])

  const [text, setText] = useState('')

  const updateItemById = (id: number) => {
    setList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, value: `!!! ${item.value}` }
        }

        return item
      })
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleEnterAction = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setList((prev) => [...prev, { value: text, id: list.length + 1 }]) // у нас всё равно нет удаления, поэтому можно и такой id
      setText('')
    }
  }

  const handleFocus = () => {
    inputRef.current?.focus()
  }

  return (
    <>
      <Header />
      <MainContent>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleInputChange}
          onKeyDown={handleEnterAction}
        />
        <button onClick={handleFocus}>Фокус</button>
        <List listData={list} modifyItem={updateItemById} />
      </MainContent>
      <Footer />
    </>
  )
}

export default App
