import { useState } from 'react'

const ColorText = () => {
  const [color, setColor] = useState<'black' | 'red'>('black')

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === 'black' ? 'red' : 'black'))
  }

  return (
    <div className="card-container" style={{ color }}>
      <p>Текст с цветом: {color}</p>
      <button onClick={toggleColor}>Переключить цвет</button>
    </div>
  )
}

export default ColorText
