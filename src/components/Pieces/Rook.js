import React from 'react'
import rook from '../../img/rook.png'

const Rook = ()=>{
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <img src={rook} alt="Rook"/>
                    <h2>Rook</h2>
                </div>
                <div className="card-back">
                    <p>
                    The Rooks can move in a straight line in any direction - forwards, backwards, left, or right. It cannot move diagonally. <br/><br/>
                    The Rooks can move any number of spaces, so long as they are not obstructed by another piece. <br/><br/>
                    It can capture any piece that sits within its range of movement.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Rook