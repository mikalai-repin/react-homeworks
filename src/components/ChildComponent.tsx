type Props = {
  name: string
  counter: number
}

const ChildComponent: React.FC<Props> = ({ name, counter }) => {
  return (
    <p>
      Привет, {name}! Текущий счётчик: {counter}
    </p>
  )
}

export default ChildComponent
