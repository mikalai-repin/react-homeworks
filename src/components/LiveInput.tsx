import { useState } from 'react'

const LiveInput = () => {
  const [value, setValue] = useState('')

  return (
    <div className="card-container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Введенное значение: {value}</p>
    </div>
  )
}

export default LiveInput
