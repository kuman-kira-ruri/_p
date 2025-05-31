import React, { useState, useRef } from "react";
import "../styles/ProductSearch.css";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableBody from "./ProductTableBody";

const ROW_HEIGHT = 40;
const VISIBLE_ROWS = 8;
const TOTAL_ROWS = 30;
const products = Array(TOTAL_ROWS)
  .fill(0)
  .map((_, i) => ({ name: "core I7", spec: "4ghz", price: "45700" }));
const COL_COUNT = 5;
const INIT_WIDTHS = [60, 200, 200, 200, 100];

const ProductSearch2 = () => {
  const [colWidths, setColWidths] = useState(INIT_WIDTHS);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const resizingCol = useRef(null);
  const startX = useRef(0);
  const startWidth = useRef(0);

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

  const handleBodyScroll = (e) => {
    setScrollLeft(e.target.scrollLeft);
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div className="product-search-container">
      <div className="product-search-title">商品検索2</div>
      <div className="product-search-form">
        <label htmlFor="category">商品分類</label>
        <select id="category" className="product-search-select">
          <option value="cpu">CPU</option>
          <option value="memory">メモリ</option>
          <option value="storage">ストレージ</option>
        </select>
      </div>
      <div className="product-table-scroll" style={{ width: 900 }}>
        <div style={{ minWidth: colWidths.reduce((a, b) => a + b, 0) }}>
          <ProductTableHeader
            colWidths={colWidths}
            scrollLeft={scrollLeft}
            handleMouseDown={handleMouseDown}
          />
          <ProductTableBody
            colWidths={colWidths}
            scrollTop={scrollTop}
            products={products}
            onScroll={handleBodyScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSearch2; 