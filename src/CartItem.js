import React from 'react';

class CartItem extends React.Component {
  constructor(){
    super();
    this.state = {
      price : 999,
      title : 'Telephone',
      qty : 1,
      img : ''
    }
  }
  render () {
  const { price,title,qty} = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">

           {/* instant of use this.state.price   use const {price,title,qty } = this.state*/}
          {/* <div style={ { fontSize: 25 } }>{this.state.title}</div> */}
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>{price}</div>
          <div style={ { color: '#777' } }>{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
          </div>
        </div>
      </div>
    );
  
}
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;