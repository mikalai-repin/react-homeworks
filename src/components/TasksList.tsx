import { useState } from 'react'

const randomPhrases = [
  'Полить цветы',
  'Сделать зарядку',
  'Прочитать 10 страниц книги',
  'Разобрать почту',
  'Позвонить другу',
  'Помедитировать 5 минут',
  'Приготовить ужин',
]

const TasksList = () => {
  const [tasks, setTasks] = useState(['Купить хлеб', 'Погулять с собакой'])

  const addTask = () => {
    const randomIndex = Math.floor(Math.random() * randomPhrases.length)
    const randomText = randomPhrases[randomIndex]

    setTasks((prev) => [...prev, randomText])
  }

  const deleteLastTask = () => {
    setTasks((prev) => {
      if (prev.length === 0) return prev
      return prev.slice(0, -1)
    })
  }

  return (
    <div className="card-container">
      <h3>Список задач</h3>
      <ul>
        {tasks.map((task, idx) => (
          <li key={task + idx}>{task}</li>
        ))}
      </ul>
      <button onClick={addTask}>Добавить задачу</button>
      <button onClick={deleteLastTask}>Удалить последнюю задачу</button>
    </div>
  )
}

export default TasksList
