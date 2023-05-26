import React from 'react';
import { MenuList } from './MenuList';
import { Container } from '../styled/Container';
import { useMenuState } from './MenuState';

import './Menu.css';

export const Menu = ({ menuState }) => {
  const { selectedButton, handleButtonClick, handleAddToCart } = useMenuState();

  const renderFoodItems = () => {
    const selectedMenuItem = MenuList.find(item => item.id === selectedButton);
    if (selectedMenuItem) {
      return selectedMenuItem.food.map((foodItem, index) => (
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
      ));
    }
    return null;
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
