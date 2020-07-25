import React from 'react'
import learn from '../../img/learn.png'

const Learn =()=>{
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <img src={learn} alt="Learn"/>
                    <h2>Learn</h2>
                </div>
                <div className="card-back">
                    <p>Here are some links to help you get started with learning chess:</p>
                    <ul>
                        <li><a href="https://www.chess.com" target="_blank" rel="noopener noreferrer">Chess.com</a></li>
                        <li><a href="https://lichess.org/" target="_blank" rel="noopener noreferrer">Lichess.org</a></li>
                        <li><a href="https://www.chessable.com/?page=landingpage" target="_blank" rel="noopener noreferrer">Chessable.com</a></li>
                        <li><a href="https://chess24.com/en" target="_blank" rel="noopener noreferrer">Chess24.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Learn