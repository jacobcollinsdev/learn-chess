import React from 'react'
import knight from '../../img/knight.png'

const Knight = ()=>{
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <img src={knight} alt="Knight"/>
                    <h2>Knight</h2>
                </div>
                <div className="card-back">
                    <p>
                    The Knights move in an “L” shape. This can best be described as moving to nearest square that isn’t on the same rank, file, or diagonal. <br/><br/>
                    Picture this by moving the Knight two spaces in any direction, then one space perpendicular to that. <br/><br/>
                    The Knight is the only piece that can jump over other pieces to reach its destination square.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Knight