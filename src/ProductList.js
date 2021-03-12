import Product from './Product'
import React, { Component } from 'react'
import { items } from './products'

export default class ProductList extends Component {

    state = {
        productList: items,
        cart: []
    }

    addToCart = (product) => {
        let carts = this.state.cart;
        let item = carts.find(el => el.id === product.id)
        if (item) {
            item.qty = item.qty ? item.qty + 1 : 1;
        } else {
            item = {
                ...product,
                qty: 1
            }
            carts.push(item);
        }
        items.map(el => {
            if (product.id === el.id) {
                el.qty -= 1;
            }
        })
        this.setState({ productList: items, cart: carts })
    }

    removeFromCart = (product) => {
        let carts = this.state.cart;
        let item = carts.find(el => el.id === product.id)
        item.qty = item.qty - 1;
        if (!item.qty) {
            carts = carts.filter(el => el.id !== product.id)
        }
        items.map(el => {
            if (product.id === el.id) {
                el.qty += 1;
            }
            return; 
        })
        this.setState({ productList: items, cart: carts })

    }

    render() {
        const { cart, productList } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', }}>
                    {
                        productList.length > 0 && productList.map(el => {
                            return (<div key={el.name} style={{ margin: "3%" }}>
                                <Product product={el} addToCart={this.addToCart} />
                            </div>
                            )
                        })
                    }
                </div>
                <h1> Items in Cart</h1>
                <div style={{ display: 'flex' }}>
                    {
                        cart.length > 0 && cart.map(el => {
                            return (<div key={el.name} style={{ margin: "3%" }}>
                                <Product product={el} removeFromCart={this.removeFromCart} />
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}