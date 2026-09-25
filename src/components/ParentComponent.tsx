import { useState } from 'react'
import ChildComponent from './ChildComponent'
import SiblingComponent from './SiblingComponent'

const ParentComponent = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>Счетчик: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Увеличить</button>
      <button onClick={() => setCounter(0)}>Сбросить</button>
      <button onClick={() => setCounter(Math.floor(Math.random() * 10) + 1)}>
        Случайное значение
      </button>
      <button onClick={() => setCounter((prev) => (prev >= 1 ? prev - 1 : 0))}>
        Уменьшить
      </button>
      <br />
      <ChildComponent name="Alex" counter={counter} />
      <SiblingComponent />
    </div>
  )
}

export default ParentComponent
