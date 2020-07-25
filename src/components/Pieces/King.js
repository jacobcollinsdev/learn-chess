import React from 'react'
import king from '../../img/king.png'

const King = ()=>{
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <img src={king} alt="King"/>
                    <h2>King</h2>
                </div>
                <div className="card-back">
                    <p>
                    The King is not most powerful piece in the game, but it is the most important. If your King has been checkmated, you lose - so it’s best to always keep it well protected! <br/><br/>
                    The King can move one space in any direction and can capture any piece within those squares so long as doing so doesn’t put you in Check.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default King