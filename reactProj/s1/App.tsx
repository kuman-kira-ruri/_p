import React from 'react';
// @ts-ignore
import NewsPortalSample from './components/NewsPortalSample' /* eslint-disable */
// @ts-ignore
import AmazonPaySample from './components/AmazonPaySample' /* eslint-disable */
// @ts-ignore
import ProductSearch from './components/ProductSearch' /* eslint-disable */
// @ts-ignore
import ProductSearch2 from './components/ProductSearch2' /* eslint-disable */
// @ts-ignore
import PriceCompare from './components/PriceCompare' /* eslint-disable */
// @ts-ignore
import AmazonLikeProductPage from './components/AmazonLikeProductPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/amazon-like" element={<AmazonLikeProductPage />} />
    </Routes>
  )
}

export default App 