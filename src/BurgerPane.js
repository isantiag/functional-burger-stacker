import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

function BurgerPane(props) {
    return (
        <div>
            <BurgerStack burgerIngredients={props.burgerIngredients} />
            <ClearBurger clearStack={props.clearStack}/>
        </div>
    )
    
}

export default BurgerPane


