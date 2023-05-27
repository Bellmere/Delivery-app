import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { MenuList } from './MenuList';
import { Container } from '../styled/Container';
import { useDispatch, useSelector } from 'react-redux';
import { add, increaseQuantity } from 'redux/MenuSlice/MenuSlice';
import { toast } from 'react-toastify';

import './Menu.css';

export const Menu = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const dispatch = useDispatch();
  const menuItems = useSelector(state => state.food.items);

  const renderFoodItems = () => {
    const selectedMenuItem = MenuList.find(item => item.id === selectedButton);
    if (selectedMenuItem) {
      return selectedMenuItem.food.map((foodItem, index) => {
        const cartItem = menuItems.find(item => item.id === foodItem.id);

        return (
          <div className="food__item" key={index}>
            <div className="food__photo">
              <img src={foodItem.src} alt={foodItem.name} />
            </div>
            <div className="food__details">
              <h3>{foodItem.name}</h3>
              <p>Price: ${foodItem.price}</p>
            </div>
            <div className="food__add--wrap">
              <button
                className="menu__btn food__add"
                type="button"
                onClick={() => handleAddToCart(foodItem)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      });
    }
    return null;
  };

  const handleAddToCart = foodItem => {
    const existingItem = menuItems.find(item => item.name === foodItem.name);
    if (existingItem) {
      dispatch(increaseQuantity(existingItem.id));
    } else {
      const newItem = {
        ...foodItem,
        quantity: 1,
        id: nanoid(),
      };
      dispatch(add(newItem));
      toast.success('The item has been added successfully.');
    }
  };

  const handleButtonClick = buttonId => {
    setSelectedButton(buttonId);
  };

  return (
    <section className="menu">
      <Container>
        <div className="menu--wrapper">
          <div className="menu__list">
            <h2>Menu</h2>
            {MenuList.map(item => (
              <button
                className={`menu__btn ${
                  selectedButton === item.id ? 'active' : ''
                }`}
                type="button"
                key={item.id}
                onClick={() => handleButtonClick(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="menu__content--wrap">
            {selectedButton && (
              <div className="menu__content">{renderFoodItems()}</div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
