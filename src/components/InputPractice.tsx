const InputPractice: React.FC = () => {
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Нажат Enter')
    }
  }

  const handleFocus = () => {
    console.log('Поле получило фокус')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onChange: ', e.target.value)
  }

  const handleBlur = () => {
    console.log('Поле потеряло фокус')
  }

  return (
    <div className="card-container">
      <h3>Input Practice</h3>
      <input
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleEnter}
      />
    </div>
  )
}

export default InputPractice
