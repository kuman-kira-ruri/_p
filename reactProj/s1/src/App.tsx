import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import NewsPortalSample from './components/NewsPortalSample' /* eslint-disable */
import AmazonPaySample from './components/AmazonPaySample' /* eslint-disable */
import ProductSearch from './components/ProductSearch' /* eslint-disable */
import ProductSearch2 from './components/ProductSearch2' /* eslint-disable */
import PriceCompare from './components/PriceCompare' /* eslint-disable */
import AmazonLikeProductPage from './components/AmazonLikeProductPage'

const navStyle: React.CSSProperties = {
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: '#f8f9fa',
  borderBottom: '1px solid #e0e0e0',
  zIndex: 1000,
}

const navListStyle: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  gap: '2rem',
  margin: 0,
  padding: '1rem 2rem',
}

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
  fontSize: '1.1rem',
}

const mainStyle: React.CSSProperties = {
  padding: '6rem 2rem 2rem 2rem', // 上部にナビゲーション分の余白
  minHeight: '100vh',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const App = () => {
  return (
    <div>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li>
            <Link to="/" style={linkStyle}>
              ホーム
            </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/register" style={linkStyle}>
              登録
            </Link>
          </li>
          <li>
            <Link to="/portal" style={linkStyle}>
              ポータル
            </Link>
          </li>
          <li>
            <Link to="/amazonpay" style={linkStyle}>
              Amazon Pay
            </Link>
          </li>
          <li>
            <Link to="/productsearch" style={linkStyle}>
              商品検索
            </Link>
          </li>
          <li>
            <Link to="/productsearch2" style={linkStyle}>
              商品検索2
            </Link>
          </li>
          <li>
            <Link to="/pricecompare" style={linkStyle}>
              比較表
            </Link>
          </li>
          <li>
            <Link to="/amazon-like" style={linkStyle}>
              Amazon風商品
            </Link>
          </li>
        </ul>
      </nav>
      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/portal" element={<NewsPortalSample />} />
          <Route path="/amazonpay" element={<AmazonPaySample />} />
          <Route path="/productsearch" element={<ProductSearch />} />
          <Route path="/productsearch2" element={<ProductSearch2 />} />
          <Route path="/pricecompare" element={<PriceCompare />} />
          <Route path="/amazon-like" element={<AmazonLikeProductPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App 