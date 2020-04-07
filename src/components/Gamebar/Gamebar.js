import React from "react";

const Gamebar = props => (
  <nav className="Gamebar">
    <div>
    <button className="restart" onClick={() => props.newGame()}>
            new game</button>
      <ul className="gamebar-nav">
        <li className="nav-item">
          <div className="wins">wins: <span>{props.wins}</span> </div>
        </li> <li className="nav-item">
          <div className="losses">losses: <span>{props.losses}</span> </div>
        </li> <li className="nav-item">
          <div className="score">current score: <span>{props.score}/7</span></div>
        </li>  <li className="nav-item">
          <div className="wrongGuesses">incorrect guesses: <span>{props.wrongGuesses}/7</span></div>
        </li><br/>
      </ul>
    </div>
  </nav>
);



export default Gamebar;