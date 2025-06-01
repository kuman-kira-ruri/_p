import React from 'react';

const ProductTableHeader = ({ 
  colWidths, 
  scrollLeft, 
  handleMouseDown 
}) => {
  const tableWidth = colWidths.reduce((a, b) => a + b, 0);
  const testWidth = 1000; // Example width for testing
  return (
    <div
      className="product-table-header-scroll"
      style={{ overflowX: 'hidden', overflowY: 'hidden', width: tableWidth }}
    >
      <table className="product-table-header" style={{ width: tableWidth, transform: `translateX(-${scrollLeft}px)` }}>
        <colgroup>
          {colWidths.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th>
              No
              <div className="resize-handle" onMouseDown={e => handleMouseDown(e, 0)} />
            </th>
            <th>
              商品名
              <div className="resize-handle" onMouseDown={e => handleMouseDown(e, 1)} />
            </th>
            <th>
              スペック
              <div className="resize-handle" onMouseDown={e => handleMouseDown(e, 2)} />
            </th>
            <th>
              値段
              <div className="resize-handle" onMouseDown={e => handleMouseDown(e, 3)} />
            </th>
            <th>
              <div className="resize-handle" onMouseDown={e => handleMouseDown(e, 4)} />
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ProductTableHeader; 