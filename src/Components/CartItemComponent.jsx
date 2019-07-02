import React from "react";

const CartItemComponent = props => {
  const rows = props.cartItemsList.map((row, index) => {
    return (
      <div className="collection-item list-group-item" key={index}>
        <div className="row">
          <div className="col-md-8">{row.product.name}</div>
          <div className="col-md-2">${row.product.priceInCents / 100}</div>
          <div className="col-md-2">{row.quantity}</div>
        </div>
      </div>
    );
  });
  return <div>{rows}</div>;
};

export default CartItemComponent;
