import React, { useState, useRef } from "react";
import "../styles/ProductSearch.css";

const ROW_HEIGHT = 40;
const VISIBLE_ROWS = 8; // 8行分表示
const TOTAL_ROWS = 30;
const products = Array(TOTAL_ROWS)
  .fill(0)
  .map((_, i) => ({ name: "core I7", spec: "4ghz", price: "45700" }));
const COL_COUNT = 5;
const INIT_WIDTHS = [60, 200, 200, 200, 100];

const ProductSearch = () => {
  const [colWidths, setColWidths] = useState(INIT_WIDTHS);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const resizingCol = useRef(null);
  const startX = useRef(0);
  const startWidth = useRef(0);
  const headerRef = useRef(null);
  const bodyRef = useRef(null);

  const handleMouseDown = (e, colIdx) => {
    resizingCol.current = colIdx;
    startX.current = e.clientX;
    startWidth.current = colWidths[colIdx];
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (resizingCol.current === null) return;
    const diff = e.clientX - startX.current;
    setColWidths((widths) => {
      const newWidths = [...widths];
      newWidths[resizingCol.current] = Math.max(40, startWidth.current + diff);
      return newWidths;
    });
  };

  const handleMouseUp = () => {
    resizingCol.current = null;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const tableWidth = colWidths.reduce((a, b) => a + b, 0);

  // バーチャライズ用
  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };
  const startIdx = Math.floor(scrollTop / ROW_HEIGHT);
  const endIdx = Math.min(startIdx + VISIBLE_ROWS, products.length);
  const visibleRows = products.slice(startIdx, endIdx);
  const paddingTop = startIdx * ROW_HEIGHT;
  const paddingBottom = (products.length - endIdx) * ROW_HEIGHT;

  // 横スクロール同期（transformでヘッダーをスライド）
  const handleBodyScroll = (e) => {
    setScrollLeft(e.target.scrollLeft);
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div className="product-search-container">
      <div className="product-search-title">商品検索</div>
      <div className="product-search-form">
        <label htmlFor="category">商品分類</label>
        <select id="category" className="product-search-select">
          <option value="cpu">CPU</option>
          <option value="memory">メモリ</option>
          <option value="storage">ストレージ</option>
        </select>
      </div>
      <div className="product-table-scroll" style={{ width: 900 }}>
        <div style={{ minWidth: tableWidth }}>
          <div
            ref={headerRef}
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
          <div
            ref={bodyRef}
            className="product-table-virtual-body"
            style={{ height: ROW_HEIGHT * VISIBLE_ROWS, width: tableWidth, overflowX: 'auto', overflowY: 'auto' }}
            onScroll={handleBodyScroll}
          >
            <table className="product-table-body" style={{ width: tableWidth }}>
              <colgroup>
                {colWidths.map((w, i) => (
                  <col key={i} style={{ width: w }} />
                ))}
              </colgroup>
              <tbody>
                {paddingTop > 0 && (
                  <tr style={{ height: paddingTop }}><td colSpan={COL_COUNT} style={{ padding: 0, border: 'none', background: 'transparent' }} /></tr>
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
                  <tr style={{ height: paddingBottom }}><td colSpan={COL_COUNT} style={{ padding: 0, border: 'none', background: 'transparent' }} /></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch; 