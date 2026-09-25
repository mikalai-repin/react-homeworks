import { useState } from 'react'

const SiblingComponent = () => {
  const [text, setText] = useState('Sibling text')

  return (
    <>
      <p>Текущий текст: {text}</p>
      <button onClick={() => setText('REDEV')}>Изменить текст</button>
    </>
  )
}

export default SiblingComponent
