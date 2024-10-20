import React from 'react'
import Modal from 'react-modal'

const AddToCartModal = ({product, onClose}) => {
  return (
    <Modal isOpen={true} onRequestClose={onClose} className="modal">
      <h2>Add {product.name} to Cart</h2>
      <p>Price: ₹{product.price}</p>
      <button onClick={onClose}>Confirm</button>
      <button onClick={onClose}>Close</button>
    </Modal>
  )
}

export default AddToCartModal
