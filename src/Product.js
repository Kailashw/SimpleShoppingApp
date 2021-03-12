import React from 'react'

export default function Product({ product, addToCart, removeFromCart }) {
    return (
        <div>
            <img src={product.img} alt={product.name}/>
            <h2> {product.name} </h2>
            <h2> qty :{product.qty} </h2>
            <h2> Price :{product.price} </h2>
            { addToCart && <button onClick={() => addToCart(product)}> Add to cart </button> }
            { removeFromCart && <button onClick={() => removeFromCart(product)}> Remove from cart </button> }
        </div>
    )
}
