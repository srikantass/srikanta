import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class TableToPDF extends React.Component {
  exportToPDF = () => {
    const input = document.getElementById('table-container'); // Replace with the ID of your table container
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/svg');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'SVG', 0, 0);
        pdf.save('table.pdf');
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.exportToPDF}>Export to PDF</button>
        <div id="table-container">
          <table>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {/* Add rows with data */}
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                {/* Add more data cells as needed */}
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TableToPDF;
