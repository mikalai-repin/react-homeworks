type Props = {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => {
  return <article className="card">{children}</article>
}

export default Card
