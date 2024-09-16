

export default function GameBoard({ gameBoard, onSelectSquare }) {
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);
//   const handleSelectSquare = (rowIdx, colIdx) => {
//     setGameBoard(prevGameBoard => {
//         const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
//         updatedBoard[rowIdx][colIdx] = activePlayerSymbol;
//         return updatedBoard;
//     });

//     onSelectSquare();
//   }
  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIdx) => (
          <li key={rowIdx}>
            <ol>
              {row.map((playSymbol, colIdx) => (
                <li key={colIdx}>
                  <button onClick={() => onSelectSquare(rowIdx, colIdx)} disabled={playSymbol !== null}>{playSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
