import React, { useState } from "react";

function App() {
  const [numRows, setNumRows] = useState("");
  const [numCols, setNumCols] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleRowChange = (event) => {
    setNumRows(parseInt(event.target.value));
  };

  const handleColChange = (event) => {
    setNumCols(parseInt(event.target.value));
  };

  const generateTable = () => {
    const data = [...Array(numRows)].map(() =>
      [...Array(numCols)].map(() => "0")
    );
    setTableData(data);
  };

  return (
    <div>
      <label>
        Rows:
        <input
          type="number"
          value={numRows.toString()}
          onChange={handleRowChange}
        />
      </label>
      <label>
        Columns:
        <input
          type="number"
          value={numCols.toString()}
          onChange={handleColChange}
        />
      </label>
      <button onClick={generateTable}>Generate Table</button>
      <table>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
