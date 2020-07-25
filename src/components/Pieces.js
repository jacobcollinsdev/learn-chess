import React from 'react'
import pawn from '../img/pawn.png'
import rook from '../img/rook.png'
import knight from '../img/knight.png'
import bishop from '../img/bishop.png'
import queen from '../img/queen.png'
import king from '../img/king.png'

const Pieces = ()=>{
    return(
        <div className="grid">

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
            
        </div>
    )
}

export default Pieces