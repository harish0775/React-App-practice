import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    render(){
        const arr = [1, 2,3,4,5,6,7,'Some String']
        return(
            <div className = "cart">
                { arr.map((item) =>{ // call back function
                    return item + 5;
                })}
            </div>
        )
    }
}
export default Cart;
