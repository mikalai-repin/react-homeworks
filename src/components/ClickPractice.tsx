const ClickPractice: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement

    console.log('event.target: ', target)
    // возникает на элементе, по которому произошел клик и всплывает,
    // вызывая слушатель родителя (если есть вложенность),
    // целевым элементом всегла является тот, который стал источником клика

    console.log('e.currentTarget: ', e.currentTarget) // жестко завязан на элементе, у которого установлен текущий слушатель

    console.log('e.target.tagName', target.tagName)
    console.log('e.currentTarget.tagName: ', e.currentTarget.tagName)
  }

  return (
    <div className="card-container">
      <h3>Click Practice</h3>
      <button onClick={handleClick}>
        <span>👍</span>
        <span>Поставить лайк</span>
      </button>
    </div>
  )
}

export default ClickPractice
