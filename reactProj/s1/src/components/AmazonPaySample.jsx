import React from "react";
import "../styles/AmazonPaySample.css";

const features = [
  "Amazonアカウントで簡単決済",
  "クレジットカード情報の再入力不要",
  "Amazonのセキュリティで安心",
  "注文履歴もAmazonで一元管理"
];

const notes = [
  "このページはデモ用です。実際の決済は行われません。",
  "Amazon Payのご利用にはAmazonアカウントが必要です。",
  <>詳細は <a href="#">Amazon Pay公式サポート</a> をご覧ください。</>
];

const AmazonPaySample = () => {
  return (
    <div className="amazonpay-container">
      <div className="amazonpay-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_Pay_logo.svg" alt="Amazon Pay ロゴ" className="amazonpay-logo" />
        <h1>Amazon Pay 決済サンプル</h1>
      </div>
      <p className="amazonpay-desc">
        Amazon Payは、Amazonアカウントを利用して簡単・安全にオンライン決済ができるサービスです。
        クレジットカード情報の入力不要で、スムーズなお支払いが可能です。
      </p>
      <button className="amazonpay-btn" disabled>
        Amazonアカウントで支払う（デモ）
      </button>
      <section className="amazonpay-features">
        <h2>Amazon Payの特徴</h2>
        <ul className="amazonpay-list">
          {features.map((text, idx) => (
            <li key={idx}>
              <span className="custom-dot">・</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="amazonpay-notes">
        <h3>ご注意</h3>
        <ul className="amazonpay-list">
          {notes.map((text, idx) => (
            <li key={idx}>
              <span className="custom-dot">・</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AmazonPaySample; 