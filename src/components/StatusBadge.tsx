const StatusBadge = ({ isAvailable }: { isAvailable: boolean }) => {
  return (
    <span
      style={{
        padding: '4px 8px',
        borderRadius: '4px',
        backgroundColor: isAvailable ? 'green' : 'red',
        color: 'white',
      }}
    >
      {isAvailable ? 'Доступен для проекта' : 'Сейчас занят'}
    </span>
  )
}

export default StatusBadge
