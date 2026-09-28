const FormPractice: React.FC = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Форма отправлена')
    console.log(e.currentTarget)
  }

  return (
    <div className="card-container">
      <h3>Form Practice</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Введи имя" />

        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default FormPractice
