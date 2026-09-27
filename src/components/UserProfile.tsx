import { useState } from 'react'

const names = ['Дмитрий', 'Алексей', 'Андрей', 'Мирон', 'Костя']

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Иван',
    age: 25,
    isActive: true,
  })

  const upadateName = () => {
    const randomIndex = Math.floor(Math.random() * names.length)
    const name = names[randomIndex]

    setUser((prev) => ({
      ...prev,
      name,
    }))
  }

  return (
    <div className="card-container">
      <h3>Профиль пользователя</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>Имя: {user.name}</li>
        <li>Возраст: {user.age}</li>
        <li>Активен: {user.isActive ? 'да' : 'нет'}</li>
      </ul>
      <button onClick={upadateName}>Сменить имя</button>
      <button
        onClick={() => setUser((prev) => ({ ...prev, age: prev.age + 1 }))}
      >
        Увеличить возраст
      </button>
      <button
        onClick={() =>
          setUser((prev) => ({ ...prev, isActive: !prev.isActive }))
        }
      >
        Переключить активность
      </button>
    </div>
  )
}

export default UserProfile
