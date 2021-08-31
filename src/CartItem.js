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
  increaseQuantity = () => {
     this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      }
    });
  }

  decreaseQuantity = () => {
    const { qty } = this.state;

    if (qty === 0) {
      return;
    }
    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  }

  
  render () {
  const { price,title,qty} = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>{price}</div>
          <div style={ { color: '#777' } }>{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
            alt = "Increase"
            className = "action-icons"
            src = "https://cdn-icons-png.flaticon.com/512/64/64522.png"
            // use this IncreaseQuantity in contructor
            // onClick = {this.IncreaseQuantity.bind(this)}
            onClick = {this.increaseQuantity}
            />  
            <img
            alt = "Decrease"
            className = "action-icons"
            src = "https://img-premium.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1630429617~hmac=88c32141ca5458612c54090b159b8804"
            onClick = {this.decreaseQuantity}
            />
            <img
            alt = "Delete"
            className = "action-icons"
            src = "https://img-premium.flaticon.com/png/512/484/premium/484611.png?token=exp=1630431275~hmac=91e78dc0bf8cffcf53c53c8a5cc329d8"
            />
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