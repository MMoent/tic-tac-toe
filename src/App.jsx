import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winningCombination";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let curPlayer = "X";
  if (gameTurns.length && gameTurns[0].player === "X") curPlayer = "O";
  return curPlayer;
}

function deriveGameBoard(gameTurns) {
  // let gameBoard = INITIAL_GAME_BOARD;
  let gameBoard = [...INITIAL_GAME_BOARD.map(innerArr => [...innerArr])];  // for rematch

  for (const turn of gameTurns.slice().reverse()) {
    const { square, player } = turn;
    const { rowIdx, colIdx } = square;
    gameBoard[rowIdx][colIdx] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;
  for (const comb of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[comb[0].rowIdx][comb[0].colIdx];
    const secondSquareSymbol = gameBoard[comb[1].rowIdx][comb[1].colIdx];
    const thirdSquareSymbol = gameBoard[comb[2].rowIdx][comb[2].colIdx];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
      break;
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]); // REACT principle: manage as little state as possible, derive as many as possible

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIdx, colIdx) => {
    // setActivePlayer(curActivePlayer => curActivePlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns) => {
      // let currentPlayer = "X";
      // if(prevTurns.length && prevTurns[0].player === "X") currentPlayer = "O";  // don't merge different states
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { rowIdx, colIdx }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  const handleRematch = () => {
    setGameTurns([]);
  }
  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName,    // dynamic add key-value pair
      }
    })
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={PLAYERS.X}
              symbol="X"
              isActive={activePlayer === "X"}
              onChangePlayerName={handlePlayerNameChange}
            />
            <Player
              name={PLAYERS.O}
              symbol="O"
              isActive={activePlayer === "O"}
              onChangePlayerName={handlePlayerNameChange}
            />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
          <GameBoard
            gameBoard={gameBoard}
            onSelectSquare={handleSelectSquare}
            turns={gameTurns}
          />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
