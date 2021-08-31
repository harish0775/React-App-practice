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
    
    // this.IncreaseQuantity = this.IncreaseQuantity.bind(this);
    // 
    //another Way to use Find  Function  -> ( = => )
  }
  IncreaseQuantity = () => {
    console.log('this',this.state);
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
            onClick = {this.IncreaseQuantity}
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