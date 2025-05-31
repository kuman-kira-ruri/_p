import React from 'react';

const ROW_HEIGHT = 40;
const VISIBLE_ROWS = 8;
const COL_COUNT = 5;

const ProductTableBody = ({
  colWidths,
  scrollTop,
  products,
  onScroll
}) => {
  const tableWidth = colWidths.reduce((a, b) => a + b, 0);
  const startIdx = Math.floor(scrollTop / ROW_HEIGHT);
  const endIdx = Math.min(startIdx + VISIBLE_ROWS, products.length);
  const visibleRows = products.slice(startIdx, endIdx);
  const paddingTop = startIdx * ROW_HEIGHT;
  const paddingBottom = (products.length - endIdx) * ROW_HEIGHT;

  return (
    <div
      className="product-table-virtual-body"
      style={{ 
        height: ROW_HEIGHT * VISIBLE_ROWS, 
        width: tableWidth, 
        overflowX: 'auto', 
        overflowY: 'auto' 
      }}
      onScroll={onScroll}
    >
      <table className="product-table-body" style={{ width: tableWidth }}>
        <colgroup>
          {colWidths.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
        <tbody>
          {paddingTop > 0 && (
            <tr style={{ height: paddingTop }}>
              <td colSpan={COL_COUNT} style={{ padding: 0, border: 'none', background: 'transparent' }} />
            </tr>
          )}
          {visibleRows.map((p, idx) => (
            <tr key={startIdx + idx} style={{ height: ROW_HEIGHT }}>
              <td>{startIdx + idx + 1}</td>
              <td>{p.name}</td>
              <td>{p.spec}</td>
              <td>{p.price}</td>
              <td></td>
            </tr>
          ))}
          {paddingBottom > 0 && (
            <tr style={{ height: paddingBottom }}>
              <td colSpan={COL_COUNT} style={{ padding: 0, border: 'none', background: 'transparent' }} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTableBody; 