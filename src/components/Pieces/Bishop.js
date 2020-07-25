import React from 'react'
import bishop from '../../img/bishop.png'

const Bishop = ()=>{
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <img src={bishop} alt="Bishop"/>
                    <h2>Bishop</h2>
                </div>
                <div className="card-back">
                    <p>
                    The Bishops can move diagonally in any direction.<br/><br/>
                    The Bishops can move any number of spaces, so long as they are not obstructed by another piece. <br/><br/>
                    It can capture any piece within its range of movement.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bishop