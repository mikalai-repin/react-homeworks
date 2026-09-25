import { useState } from 'react'

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="card-container">
      {isVisible && <p>Текст видим</p>}
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? 'Скрыть' : 'Показать'}
      </button>
    </div>
  )
}

export default ToggleText
