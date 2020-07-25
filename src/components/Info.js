import React from 'react'
import setup from '../img/setup.png'
import objective from '../img/objective.png'
import learn from '../img/learn.png'
import board from '../img/board.png'

const Info = ()=>{
    return(
        <div className="grid">
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
        </div>
    )
}

export default Info