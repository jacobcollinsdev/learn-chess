import React from 'react'
import Setup from './Info/Setup'
import Objective from './Info/Objective'
import Learn from './Info/Learn'
import Pawn from './Pieces/Pawn'
import Rook from './Pieces/Rook'
import Knight from './Pieces/Knight'
import Bishop from './Pieces/Bishop'
import Queen from './Pieces/Queen'
import King from './Pieces/King'


const CardContainer = ()=>{
    return(
        <section className="grid">
            <Setup/>
            <Objective/>
            <Learn/>
            <Pawn/>
            <Rook/>
            <Knight/>
            <Bishop/>
            <Queen/>
            <King/>
        </section>
    )
}

export default CardContainer