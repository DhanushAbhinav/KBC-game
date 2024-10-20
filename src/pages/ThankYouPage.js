import React from 'react'

const ThankYouPage = ({product}) => {
  return (
    <div className="thank-you-page">
      <h2>Thank you for your interest in {product.name}!</h2>
      <p>We appreciate your interest. Feel free to browse more products!</p>
      <button onClick={() => window.location.reload()}>
        Continue Shopping
      </button>
    </div>
  )
}

export default ThankYouPage
