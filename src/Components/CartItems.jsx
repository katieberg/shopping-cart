import React from "react";
import CartItemComponent from "./CartItemComponent";
import AddItem from "./AddItem";

class CartItems extends React.Component {
  total = () => {
    var shoppingCart = this.props.cartItemsList;
    let total = 0;
    for (let el of shoppingCart) {
      total += el["product"]["priceInCents"] * el["quantity"];
    }
    return total / 100;
  };
  render() {
    const { cartItemsList } = this.props; //surely this is not right
    const { products } = this.props;
    const { onItemAdded } = this.props;
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          <CartItemComponent cartItemsList={cartItemsList} />
        </div>
        <p>Total Price: ${this.total()}</p>
        <AddItem products={products} onItemAdded={onItemAdded} />
      </div>
    );
  }
}

export default CartItems;
