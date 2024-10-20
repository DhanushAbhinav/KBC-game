import React, {useState} from 'react'
import AddToCartModal from './AddToCartModal'

const ProductCard = ({product, onViewProduct}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddToCart = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={onViewProduct}>View Product</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {isModalOpen && (
        <AddToCartModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

export default ProductCard
