import { useEffect, useState } from 'react'
import Pictures from './Pictures'
import Controls from './Controls'

const DEFAULT_COUNT = 3

const Gallery = () => {
  const [count, setCount] = useState(DEFAULT_COUNT)
  const [updateCount, setUpdateCount] = useState(0)
  const [pictures, setPictures] = useState([])
  const [loading, setLoading] = useState(false)

  const onUpdateClick = () => {
    setUpdateCount((prev) => prev + 1)
    loadImages(count)
  }

  const onInputChange = (value: number) => setCount(value <= 0 ? 1 : value)

  const loadImages = async (countToLoad: number) => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://dog.ceo/api/breeds/image/random/${countToLoad}`
      )
      if (!response.ok) {
        throw new Error(`Ошибка HTTP запроса: ${response.status}`)
      }

      const data = await response.json()

      setPictures(data.message)
    } catch (error) {
      console.error('Error loading pictures:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadImages(DEFAULT_COUNT)
  }, [])

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Галерея собак</h1>
      <Controls
        count={count}
        updatedCount={updateCount}
        onUpdateClick={onUpdateClick}
        onInputChange={onInputChange}
      />
      <Pictures pictures={pictures} loading={loading} />
    </div>
  )
}

export default Gallery
