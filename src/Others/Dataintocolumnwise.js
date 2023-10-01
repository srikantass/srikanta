import React from 'react';

const Table = () => {
  const items = Array.from({ length: 30 }, (_, index) => index + 1); // Generate an array of 30 items

  const splitIntoColumns = (array, columns) => {
    const result = [];
    const itemsPerColumn = Math.ceil(array.length / columns);

    for (let i = 0; i < columns; i++) {
      result.push(array.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }

    return result;
  };

  const columns = splitIntoColumns(items, 3);

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        {columns[0].map((item, index) => (
          <tr key={index}>
            <td>{item}</td>
            <td>{columns[1][index]}</td>
            <td>{columns[2][index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
