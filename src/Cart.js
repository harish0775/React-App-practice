import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor () {
        super();
        this.state = {
          products: [
            {
              price: 99,
              title: 'Watch',
              qty: 1,
              img: '',
              id: 1
            },
            {
              price: 999,
              title: 'Mobile Phone',
              qty: 10,
              img: '',
              id: 2
            },
            {
              price: 999,
              title: 'Laptop',
              qty: 4,
              img: '',
              id: 3
            }
          ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
      }
      IncreaseQuantity = (product)=>{
        console.log('Hey Increase Quantity',product)
        const{products} = this.state; // get all product of a State
        const index = products.indexOf(product); // get index of the particular (Product) in the Products Array
        products[index].qty += 1; // Inc the Qty of product of particular product(index)
        this.setState({
          products : products
        })
      }
    render(){
        const{products}  = this.state;
        return(
            <div className = "cart">
                {
                products.map((product) => {
                return <CartItem  
                
                product = { product} 
                key = {product.id}
                OnIncreaseQuantity = {this.IncreaseQuantity}
                />
            })
        }
            </div>
        );
}
}

export default Cart;
