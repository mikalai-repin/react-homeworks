type Props = {
  listData: { id: number; value: string }[]
  modifyItem: (id: number) => void
}

const List: React.FC<Props> = ({ listData, modifyItem }) => {
  return (
    <ul>
      {listData.map(({ id, value }) => (
        <li key={id}>
          {value} / <button onClick={() => modifyItem(id)}>Изменить</button>
        </li>
      ))}
    </ul>
  )
}

export default List
