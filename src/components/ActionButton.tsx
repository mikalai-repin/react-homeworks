type Props = {
  text: string
  callback: () => void
}

const ActionButton: React.FC<Props> = ({ text, callback }) => {
  return (
    <div className="card-container">
      <h3>Action Button</h3>
      <button onClick={callback}>{text}</button>
    </div>
  )
}

export default ActionButton
