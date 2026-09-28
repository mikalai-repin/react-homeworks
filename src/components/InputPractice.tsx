const InputPractice: React.FC = () => {
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Нажат Enter')
    }
  }

  return (
    <div className="card-container">
      <h3>Input Practice</h3>
      <input
        onChange={(e) => console.log('onChange: ', e.target.value)}
        onFocus={() => console.log('Поле получило фокус')}
        onBlur={() => console.log('Поле потеряло фокус')}
        onKeyDown={handleEnter}
      />
    </div>
  )
}

export default InputPractice
