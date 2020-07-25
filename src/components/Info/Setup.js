import React from 'react'
import setup from '../../img/setup.png'
import board from '../../img/board.png'

const Setup =()=>{
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <img src={setup} alt="Board Setup"/>
                    <h2>Setup</h2>
                </div>
                <div className="card-back overflow">
                    <p>
                        See the below image for board setup. <br/><br/>
                        Note the bottom right square should be white, and the colour of the Queen determines what square she sits on. The white Queen is on the white square, and the black Queen is on the black square.
                    </p>
                    <img src={board} alt="Chess board setup"/>
                </div>
            </div>
        </div>
    )
}

export default Setup