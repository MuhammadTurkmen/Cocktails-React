import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('')

  return (
    <section>
      <h2>search form component</h2>
    </section>
  )
}

export default SearchForm
