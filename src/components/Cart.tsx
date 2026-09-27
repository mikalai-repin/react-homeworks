import { useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ])

  const updateCount = (id: number) => () => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    )
  }

  const deleteItem = (id: number) => () => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="card-container">
      <h3>Корзина товаров</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cart.map(({ id, title, count }) => (
          <li key={id}>
            <span>
              {title}, Кол-во: {count}
            </span>
            <button onClick={updateCount(id)}>+1</button>
            <button onClick={deleteItem(id)}>Удалить</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setCart([])}>Очистить корзину</button>
    </div>
  )
}

export default Cart
