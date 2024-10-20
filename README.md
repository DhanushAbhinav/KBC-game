## Overview
This project is an E-commerce Listing Page built with React.js. It displays a list of products to view each product and add it to the cart. Clicking "View Product" redirects the user to a Thank You page and "Add to Cart" opens a modal to confirm adding the product to the cart. It also includes pagination for product navigation and a Cart page.

## Features
1. *Header Section*: 
   - Search bar for searching products.
   - Profile and cart icons.
   
2. *Product List Section*: 
   - Displays a grid of products with images, names, and prices.
   - Each product has buttons for "View Product" and "Add to Cart."
   
3. *Add to Cart Modal*: 
   - Displays product details and an option to confirm adding the product to the cart.
   
4. *Thank You Page*: 
   - Redirects after clicking "View Product" to acknowledge the user's interest in the product.

5. *Pagination*: 
   - Pagination is implemented for product listing.

## Approach
- The project is divided into reusable components (Header, ProductCard, AddToCartModal).
- React Router is used for navigation between pages (Product List, Thank You).
- mockProducts.js contains the mock data for product listings.
- State is managed using useState and useContext for cart handling.

## Challenges Faced
- Implementing the modal and ensuring it overlays correctly on the UI.
- Managing cart state effectively across different components.
- Getting the provided Figma design and ensuring responsiveness.
- But i have passed the all requirements specified but design is close.

## Install dependencies
- npm Install

## To view the UI 
- npm start

- You will able to see the output
