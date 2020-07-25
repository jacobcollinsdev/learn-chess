import React from 'react'
import objective from '../../img/objective.png'


const Objective =()=>{
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <img src={objective} alt="Objective"/>
                    <h2>Objective</h2>
                </div>
                <div className="card-back">
                    <p>
                    The objective of the game is to capture the enemy King while preventing your King from being captured. <br/><br/>
                    The match is won when the King has been Checkmated. This means the King is in Check and has no means of escaping.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Objective