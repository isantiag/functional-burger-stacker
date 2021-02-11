import Ingredient from './Ingredient'

function BurgerStack(props) {
        
        // let burgerIngredients = props.burgerIngredients.reverse().map((item, index) => (
        //     <li style={{background: item.color}} key={`keyB${index}`}>
        //         <Ingredient ingredient={item.name}/>
        //     </li>
        // ))

        return (
            <ul>

                {props.burgerIngredients.reverse().map((item, index) => (
        
                    <li style={{backgroundColor: item.color}} key={`keyB${index}`}>
                        <Ingredient ingredient={item.name}/>
                    </li>
                ))}

                {/* {burgerIngredients} */}
            </ul>
        )
}

export default BurgerStack


