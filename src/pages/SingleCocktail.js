import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)
  
  React.useEffect(() => {
    setLoading(true) 
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if(data.drinks) {
          const {
            strDrink:name,
            strDrinkThumb:image, 
            strAlcoholic:info, 
            strCategory:category, 
            strGlass:glass, 
            srtInstructions:instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]

          const newCocktails = {
            name, image, info, category, glass, instructions, ingredients,
          }
          setCocktail(newCocktails)
        }
        else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }

    getCocktail()
  }, [id])
  
  if(loading) {
    return <Loading />
  }
  
  if(!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  const {name, image, category, info, glass, instructions, ingredients} = cocktail
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>back</Link>
      <h2 className='section-title'>{name}</h2>
    </section>
  )
}

export default SingleCocktail
