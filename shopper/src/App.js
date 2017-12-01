import React from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './static-data';
import CartPage from './CartPage';


class App extends React.Component {
  state = {
    activeTab: 0,
    cart: []
  };
  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }
  renderContent() {
    switch(this.state.activeTab) {
      default:
      case 0:
      return (
        <ItemPage
        items={items}
        onAddToCart={this.handleAddToCart} />
      );
      case 1: return this.renderCart();
    }
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  }

  renderCart() {
  // Count how many of each item is in the cart
  let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
    itemCounts[itemId] = itemCounts[itemId] || 0;
    itemCounts[itemId]++;
    return itemCounts;
  }, {});
  // Create an array of items
  let cartItems = Object.keys(itemCounts).map(itemId => {
  // Find the item by its id
  var item = items.find(item =>
  item.id === parseInt(itemId, 10)
  );
  // Create a new "item" that also has a 'count' property
  return {
    ...item,
    count: itemCounts[itemId]
    }
  });
  return (
    <CartPage items={cartItems} onAddOne={this.handleAddToCart} onRemoveOne={this.handleRemoveOne} />
  );
  }

  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    });
  }

  render() {
    let {activeTab} = this.state;
    return (
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
        <div>
          {this.state.cart.length} items
        </div>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}
export default App;
