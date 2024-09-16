export default function Log({ turns }) {
  return (
    <>
      <ol id="log">
        {turns.map((turn) => (
          <li key={`${turn.square.rowIdx}${turn.square.colIdx}`}>
            {turn.player} selected {turn.square.rowIdx},{turn.square.colIdx}
          </li>
        ))}
      </ol>
    </>
  );
}
