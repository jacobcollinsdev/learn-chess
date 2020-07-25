import React from 'react'
import queen from '../../img/queen.png'

const Queen = ()=>{
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <img src={queen} alt="Queen"/>
                    <h2>Queen</h2>
                </div>
                <div className="card-back">
                    <p>
                    The Queen is the most powerful piece on the board. It can move any number of spaces in any direction - forwards, backwards, left, right, and diagonal. <br/><br/>
                    The Queen can capture any piece that sits within its range of movement.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Queen