type Props = {
  count: number
  updatedCount: number
  onUpdateClick: () => void
  onInputChange: (value: number) => void
}

const Controls: React.FC<Props> = ({
  count,
  updatedCount,
  onUpdateClick,
  onInputChange,
}) => {
  return (
    <div>
      <p>
        Картинки обновлены <strong>{updatedCount} раз(а)</strong>
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          justifyContent: 'center',
        }}
      >
        Показать:{' '}
        <input
          type="number"
          min="1"
          max="10"
          value={count}
          onChange={(e) => onInputChange(Number(e.target.value))}
        />
        <button onClick={onUpdateClick}>Обновить</button>
      </div>
    </div>
  )
}

export default Controls
