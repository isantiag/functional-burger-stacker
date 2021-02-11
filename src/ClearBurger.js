import React, {Component} from 'react'

function ClearBurguer(props){
    return(
        <button onClick={(e)=> props.clearStack(e)}>Clear Burguer Stack</button>
    )
    
}

export default ClearBurguer
