import { pluralizeYears } from '../helpers/pluralizeYears'
import Card from './Card'
import StatusBadge from './StatusBadge'

type Props = {
  name: string
  role: string
  experience: number
  location: {
    city: string
    country: string
  }
  isAvailable: boolean
}

const UserCard: React.FC<Props> = ({
  name,
  role,
  experience,
  location,
  isAvailable,
}) => {
  return (
    <div className="user-card">
      <Card>
        <h2>{name}</h2>
        <p>{role}</p>
        <p>
          Опыт: {experience} {pluralizeYears(experience)}
        </p>
        <p>
          {location.city}, {location.country}
        </p>
      </Card>
      <StatusBadge isAvailable={isAvailable} />
    </div>
  )
}

export default UserCard
