import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="card-container">
      <p>Counter: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
    </div>
  )
}

export default Counter
