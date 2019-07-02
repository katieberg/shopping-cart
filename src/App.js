import React from "react";
import "./App.css";
import Header from "./Components/CartHeader";
import Footer from "./Components/CartFooter";
import CartItems from "./Components/CartItems";

class App extends React.Component {
  state = {//take out products - those don't need to be in state?? unless we are getting rid of them after we add to the shopping cart
    products: [
      { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
      { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
      { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
      { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
      { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
      { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
      { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
      { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
      { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 }
    ],
    cartItemsList: [
      {
        id: 1,
        product: { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
        quantity: 1
      },
      {
        id: 2,
        product: {
          id: 41,
          name: "Heavy Duty Concrete Plate",
          priceInCents: 499
        },
        quantity: 2
      },
      {
        id: 3,
        product: {
          id: 42,
          name: "Intelligent Paper Knife",
          priceInCents: 1999
        },
        quantity: 1
      }
    ]
  };
  addItem = (item,newQuantity) => {
    let currItems=this.state.cartItemsList;
    let found=false;
    for(let i=0;i<currItems.length;i++){
      if(item.name === currItems[i]['product']['name']){
        currItems[i].quantity+=newQuantity;
        found=true;
      }
      
    }
    if(found===false){
      currItems.push({id: this.state.cartItemsList.length+1, product: item, quantity: newQuantity})
    }
    this.setState(prevState => ({
      cartItemsList: currItems
    }))
  };

  render() {
    return (
      <>
        <Header />
        <CartItems
          cartItemsList={this.state.cartItemsList}
          products={this.state.products}
          onItemAdded={this.addItem}
        />
        <Footer year="2019" />
      </>
    );
  }
}

export default App;
