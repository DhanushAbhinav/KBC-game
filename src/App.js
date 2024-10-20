import React, {useState} from 'react'
import ProductListPage from './pages/ProductListPage'
import ThankYouPage from './pages/ThankYouPage'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('productList') // Track the current page
  const [selectedProduct, setSelectedProduct] = useState(null) // Track selected product

  const handleViewProduct = product => {
    setSelectedProduct(product)
    setCurrentPage('thankYou')
  }

  return (
    <div className="App">
      {currentPage === 'productList' ? (
        <ProductListPage onProductView={handleViewProduct} />
      ) : (
        <ThankYouPage product={selectedProduct} />
      )}
    </div>
  )
}

export default App
