import React from "react";
import "../styles/PriceCompare.css";

const products = [
  {
    image: "https://placehold.jp/100x100.png",
    name: "ThinkPad T14 Gen 6",
    shop: "レノボ・ショッピング",
    price: 182600,
    review: 28,
    cpu: "AMD Ryzen AI 7 PRO 350",
    passmark: 25552,
    memory: "32GB",
    storage: "256GB",
    weight: "1.39kg",
    screen: "14型WUXGA液晶",
    release: "2025/5/12"
  },
  {
    image: "https://placehold.jp/100x100.png",
    name: "ThinkBook 16 Gen 7",
    shop: "レノボ・ショッピング",
    price: 99770,
    review: 45,
    cpu: "Snapdragon X Plus X1P-42-100",
    passmark: "-",
    memory: "32GB",
    storage: "512GB",
    weight: "1.82kg",
    screen: "16型WUXGA液晶",
    release: "2024/11/18"
  }
];

const PriceCompare = () => (
  <div className="price-compare-container">
    <h2>ノートパソコン比較表</h2>
    <table className="price-compare-table">
      <thead>
        <tr>
          <th>画像</th>
          <th>商品名</th>
          <th>ショップ</th>
          <th>価格</th>
          <th>レビュー</th>
          <th>CPU</th>
          <th>PassMark</th>
          <th>メモリ</th>
          <th>ストレージ</th>
          <th>重量</th>
          <th>画面</th>
          <th>発売日</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p, i) => (
          <tr key={i}>
            <td><img src={p.image} alt={p.name} width={80} /></td>
            <td>{p.name}</td>
            <td>{p.shop}</td>
            <td>¥{p.price.toLocaleString()}</td>
            <td>{p.review}件</td>
            <td>{p.cpu}</td>
            <td>{p.passmark}</td>
            <td>{p.memory}</td>
            <td>{p.storage}</td>
            <td>{p.weight}</td>
            <td>{p.screen}</td>
            <td>{p.release}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PriceCompare; 