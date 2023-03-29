import { useState, useEffect } from 'react'
import Logo from './assets/logo-it-team.png'
import { Card } from './components/Card'

function App() {
  const [images, setimages] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    const getimages = async () => {
      try {
        let url = `https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&lang=es`
        if (searchText) {
          url += `&q=${searchText}`
        }
        if (category) {
          url += `&category=${category}`
        }
        const response = await fetch(url)
        const data = await response.json()

        setimages(data.hits)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getimages()
  }, [searchText, category])

  const imagesFilters = images.filter((element) =>
    element.user.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  )

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchText(filter)
    setFilter('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setSearchText(filter)
      setFilter('')
    }
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className='container'>
      <figure className='logo'>
        <img src={Logo} alt='Logo de It Team' />
      </figure>

      <form onSubmit={handleSearch}>
        <section className='search-container'>
          <input
            type='text'
            placeholder='Imagenes a Buscar'
            name='buscar'
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            onKeyDown={handleKeyDown}
          />

          <select className='categories' onChange={handleCategoryChange} value={category}>
            <option value=''>Seleccionar categoría</option>
            <option value='science'>Ciencia</option>
            <option value='education'>Educación</option>
            <option value='people'>Personas</option>
            <option value='feelings'>Sentimientos</option>
            <option value='computer'>Computadoras</option>
            <option value='buildings'>Edificios</option>
          </select>
        </section>
      </form>

      <section className='lista-images'>
        {loading ? (
          <p>Cargando...</p>
        ) : imagesFilters.length > 0 ? (
          imagesFilters.map((element) => (
            <Card key={element.id} element={element} />
          ))
        ) : (
          <p>
            No se encontraron images con la búsqueda{' '}
            <strong>"{filter}"</strong>.
          </p>
        )}
      </section>
    </div>
  )
}

export default App
