import React, { useState } from "react";
import "../styles/NewsPortalSample.css";

const TABS = [
  "トップ",
  "速報",
  "ライブ",
  "エキスパート",
  "オリジナル",
  "みんなの意見",
  "ランキング",
  "有料"
];

const DUMMY_ARTICLES = {
  "トップ": [
    "トップ記事1: 国内主要ニュースのダミー本文です。",
    "トップ記事2: 世界の注目ニュースのダミー本文です。",
    "トップ記事3: 社会の話題ダミー本文です。"
  ],
  "速報": [
    "速報記事1: 速報ニュースのダミー本文です。",
    "速報記事2: 緊急速報のダミー本文です。"
  ],
  "ライブ": [
    "ライブ記事1: ライブ配信ニュースのダミー本文です。",
    "ライブ記事2: 現地中継のダミー本文です。"
  ],
  "エキスパート": [
    "エキスパート記事1: 専門家の解説ダミー本文です。",
    "エキスパート記事2: 分析記事のダミー本文です。"
  ],
  "オリジナル": [
    "オリジナル記事1: 独自取材のダミー本文です。",
    "オリジナル記事2: 特集記事のダミー本文です。"
  ],
  "みんなの意見": [
    "みんなの意見1: ユーザー投稿のダミー本文です。",
    "みんなの意見2: コメントまとめのダミー本文です。"
  ],
  "ランキング": [
    "ランキング記事1: 人気記事ランキングのダミー本文です。",
    "ランキング記事2: アクセス数上位のダミー本文です。"
  ],
  "有料": [
    "有料記事1: 有料会員向けダミー本文です。",
    "有料記事2: プレミアム記事のダミー本文です。"
  ]
};

const NewsPortalSample = () => {
  const [activeTab, setActiveTab] = useState("トップ");

  return (
    <div className="news-portal-container">
      <header className="header">
        <div className="logo">YAHOO! JAPAN ニュース</div>
        <div className="header-links">
          <a href="#login">ログイン</a>
          <a href="#signup">新規取得</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="キーワードを入力" />
          <button>検索</button>
        </div>
      </header>
      <nav className="nav-bar">
        <ul>
          {TABS.map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? "active-tab" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-content">
        <section className="topics">
          <h2>{activeTab}のニュース</h2>
          <ul>
            {DUMMY_ARTICLES[activeTab].map((article, idx) => (
              <li key={idx}>{article}</li>
            ))}
          </ul>
        </section>
        <aside className="sidebar">
          <div className="ad">広告枠</div>
          <div className="trend">
            <h3>コメントトレンド</h3>
            <ol>
              <li>減税</li>
              <li>財源</li>
              <li>物価</li>
              <li>グリフィン</li>
              <li>千日手</li>
              <li>少年院</li>
            </ol>
          </div>
        </aside>
      </main>
      <footer className="footer">© 2024 Yahoo!ニュース風サンプル</footer>
    </div>
  );
};

export default NewsPortalSample; 