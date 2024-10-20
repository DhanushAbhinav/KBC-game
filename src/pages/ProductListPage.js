import React, {useState} from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import mockProducts from '../data/mockProducts'

const ProductListPage = ({onProductView}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4 // Number of products per page

  // Get current products for the page
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = mockProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  const totalPages = Math.ceil(mockProducts.length / productsPerPage)

  // Handlers for pagination
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  return (
    <div>
      <Header />
      <div className="product-grid">
        {currentProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onViewProduct={() => onProductView(product)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  )
}

export default ProductListPage
