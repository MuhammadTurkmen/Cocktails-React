import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('')

  return (
    <section className='section search'>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name"> search your favorite cocktail</label>
          <input type="text" id='name' ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
