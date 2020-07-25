import React from 'react'
import pawn from '../../img/pawn.png'

const Pawn = ()=>{
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <img src={pawn} alt="Pawn"/>
                    <h2>Pawn</h2>
                </div>
                <div className="card-back">
                    <p>
                    On its first move the Pawn can move directly forward one or two squares. On every subsequent move it can only move one square forward. <br/><br/>
                    Pawns can move diagonally forward when capturing an enemy piece. <br/><br/>
                    If a Pawn reaches the end of the board it can be promoted to either a Rook, Knight, Bishop, or Queen. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pawn