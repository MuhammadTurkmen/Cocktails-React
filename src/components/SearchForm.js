import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('')

  return (
    <section className='section search'>
      <form className="search-form">
        <div className="form-control">
          
        </div>
      </form>
    </section>
  )
}

export default SearchForm
