import React from 'react'
import Ingredient from './Ingredient'

function IngredientList(props){
    return(
        <div>
            <ul>
                {props.ingredients.map((ingredient,index)=> {
                    return (
                        <li key={index} onClick={(e)=>props.addToStack(e)} style={{backgroundColor: ingredient.color}}>
                            <Ingredient ingredient={ingredient.name}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IngredientList


