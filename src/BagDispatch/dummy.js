import React, { useState } from 'react';

function App() {
  const [checkedRows, setCheckedRows] = useState([]);

  function handleCheckboxChange(id) {
    setCheckedRows(prevCheckedRows => {
      if (prevCheckedRows.includes(id)) {
        return prevCheckedRows.filter(rowId => rowId !== id);
      } else {
        return [...prevCheckedRows, id];
      }
    });
  }

  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    // ...
  ];

  function renderRows() {
    return data.map(row => (
      <tr key={row.id}>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>
          <input
            type="checkbox"
            checked={checkedRows.includes(row.id)}
            onChange={() => handleCheckboxChange(row.id)}
          />
        </td>
      </tr>
    ));
  }

  function handleReadCheckedRows() {
    const selectedRowsData = data.filter(row => checkedRows.includes(row.id));
    console.log(selectedRowsData);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
      <button onClick={handleReadCheckedRows}>Read Checked Rows</button>
    </div>
  );
}

export default App;
