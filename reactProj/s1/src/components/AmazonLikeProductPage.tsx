import React from "react";

const dummyProduct = {
  image: "https://m.media-amazon.com/images/I/71Q5sd3pMFL._AC_SL1500_.jpg",
  name: "Intel Core Ultra 7 265K",
  brand: "インテル",
  rating: 4.5,
  reviews: 516,
  price: 51980,
  oldPrice: 79596,
  discount: 35,
  points: 520,
  stock: 20,
  specs: [
    { label: "CPUメーカー", value: "Intel" },
    { label: "CPUモデル", value: "インテルCore Ultra 7" },
    { label: "CPUスピード", value: "5.5 GHz" },
    { label: "CPUソケット", value: "LGA 1851" },
  ],
  seller: {
    name: "Amazon",
    rating: 4.5,
    reviews: 15113,
  },
};

const star = (filled: boolean) => (
  <span style={{ color: filled ? '#ffa41c' : '#ccc' }}>★</span>
);

export default function AmazonLikeProductPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fff', padding: 32, maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 32 }}>
      {/* 左：商品画像 */}
      <div style={{ flex: '0 0 340px', background: '#f7f7f7', borderRadius: 8, padding: 16, textAlign: 'center' }}>
        <img src={dummyProduct.image} alt={dummyProduct.name} style={{ maxWidth: '100%', maxHeight: 340, objectFit: 'contain' }} />
      </div>
      {/* 右：商品情報 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* 商品名・ブランド */}
        <div>
          <h1 style={{ fontSize: 28, margin: 0 }}>{dummyProduct.name}</h1>
          <div style={{ color: '#007185', fontSize: 16 }}>{dummyProduct.brand}</div>
          <div style={{ marginTop: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => star(i < Math.round(dummyProduct.rating)))}
            <span style={{ marginLeft: 8, color: '#555', fontSize: 15 }}>{dummyProduct.rating}（{dummyProduct.reviews}件の評価）</span>
          </div>
        </div>
        {/* 価格・割引 */}
        <div style={{ background: '#f6f7f9', borderRadius: 8, padding: 16, display: 'flex', alignItems: 'center', gap: 24 }}>
          <div>
            <div style={{ color: '#b12704', fontSize: 32, fontWeight: 'bold' }}>￥{dummyProduct.price.toLocaleString()}</div>
            <div style={{ color: '#565959', textDecoration: 'line-through', fontSize: 16 }}>参考価格: ￥{dummyProduct.oldPrice.toLocaleString()}</div>
            <div style={{ color: '#cc0c39', fontWeight: 'bold', fontSize: 16 }}>-{dummyProduct.discount}%</div>
          </div>
          <div style={{ color: '#007600', fontWeight: 'bold', fontSize: 16 }}>在庫あり（残り{dummyProduct.stock}点）</div>
        </div>
        {/* ポイント・カート */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ color: '#b12704', fontWeight: 'bold' }}>ポイント: {dummyProduct.points}pt (1%)</div>
          <button style={{ background: '#ffd814', border: '1px solid #fcd200', borderRadius: 8, padding: '12px 32px', fontWeight: 'bold', fontSize: 18, cursor: 'pointer', marginRight: 8 }}>カートに入れる</button>
          <button style={{ background: '#ffa41c', border: '1px solid #ff9900', borderRadius: 8, padding: '12px 32px', fontWeight: 'bold', fontSize: 18, cursor: 'pointer', color: '#fff' }}>今すぐ買う</button>
        </div>
        {/* 商品スペック */}
        <div style={{ marginTop: 16 }}>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>商品スペック</h2>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              {dummyProduct.specs.map((spec) => (
                <tr key={spec.label}>
                  <td style={{ border: '1px solid #ddd', padding: 8, background: '#f6f7f9', width: 140 }}>{spec.label}</td>
                  <td style={{ border: '1px solid #ddd', padding: 8 }}>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* 出品者情報 */}
        <div style={{ marginTop: 16, fontSize: 15, color: '#555' }}>
          <div>販売元: <b>{dummyProduct.seller.name}</b>（評価: {dummyProduct.seller.rating} / {dummyProduct.seller.reviews}件）</div>
        </div>
      </div>
    </div>
  );
} 