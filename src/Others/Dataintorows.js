import React from 'react';

function App() {
  const items = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15',
    'Item 16', 'Item 17', 'Item 18', 'Item 19', 'Item 20',
    'Item 21', 'Item 22', 'Item 23', 'Item 24', 'Item 25',
    'Item 26', 'Item 27', 'Item 28', 'Item 29', 'Item 30'
  ];

  const rows = [];
  const columnsPerRow = 3;

  for (let i = 0; i < items.length; i += columnsPerRow) {
    const rowItems = items.slice(i, i + columnsPerRow);
    const columns = rowItems.map((item, index) => (
      <td key={index}>{item}</td>
    ));

    rows.push(
      <tr key={i / columnsPerRow}>
        {columns}
      </tr>
    );
  }

  return (
    <div>
      <h1>Table with Items</h1>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default App;
