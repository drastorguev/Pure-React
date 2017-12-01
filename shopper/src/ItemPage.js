import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './App.css';

function ItemPage({ items, onAddToCart }) {
  return (
    <ul className="ItemPage-items">
      {items.map(item =>
        <li key={item.id} className="ItemPage-item">
          <Item item={item}>
            <button
            className="Item-addToCart"
            onClick={() => onAddToCart(item)}>
            Add to Cart
            </button>
          </Item>
        </li>
      )}
    </ul>
  );
}

ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;
