import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="hero-section">
        <h1>ようこそ</h1>
        <p>最高の製品とサービスを提供します</p>
        <button className="cta-button">詳細を見る</button>
      </header>

      <section className="features-section">
        <h2>主な特徴</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>高品質</h3>
            <p>最高品質の製品を提供します</p>
          </div>
          <div className="feature-card">
            <h3>迅速な対応</h3>
            <p>24時間以内の対応を保証します</p>
          </div>
          <div className="feature-card">
            <h3>安心サポート</h3>
            <p>専門スタッフがサポートします</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>お問い合わせ</h2>
        <form className="contact-form">
          <input type="text" placeholder="お名前" />
          <input type="email" placeholder="メールアドレス" />
          <textarea placeholder="メッセージ"></textarea>
          <button type="submit">送信</button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage; 