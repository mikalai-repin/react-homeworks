type PicturesProps = {
  pictures: string[]
  loading: boolean
}

const Pictures: React.FC<PicturesProps> = ({ pictures, loading }) => {
  return (
    <div className="pictures-container">
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        pictures.map((pic, index) => <img key={index} src={pic} alt="Dog" />)
      )}
    </div>
  )
}

export default Pictures
