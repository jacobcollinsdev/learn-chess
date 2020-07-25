import React from 'react'

const Header = () =>{
    return(
        <header>
            <h1>Learn Chess</h1>
            <div className="social">
                <ul>
                    <li className="list-item"><a href="https://github.com/jacobcollinsdev" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a></li>
                    <li className="list-item"><a href="https://twitter.com/jacobcollinsdev" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header