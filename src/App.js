import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const seeds = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

function App(){
  
  const [ingredients,setIngredients] = useState(seeds)
  const [burgerIngredients,setBurgerIngredients] = useState([])
  

  const addToStack = (e) => {
    let newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
    setBurgerIngredients([...burgerIngredients,newIngredient])
  }

  const clearStack = (e) => {
    setBurgerIngredients([])
  }

 
  return (
    <div style={{display: "flex"}}>
      <IngredientList ingredients={ingredients} addToStack={addToStack} />
      <BurgerPane burgerIngredients={burgerIngredients} clearStack={clearStack} />
    </div>
  )
  
}

export default App