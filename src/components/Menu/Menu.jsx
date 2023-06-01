import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from '../styled/Container';
import { useDispatch, useSelector } from 'react-redux';
import { add, increaseQuantity } from 'redux/MenuSlice/MenuSlice';
import { toast } from 'react-toastify';
import cat from '../../Images/sad-cat.png';
import { fetchMenu } from 'redux/MenuSlice/operations';
import { getMenuList, getMenuItems } from 'redux/MenuSlice/selectors';

import './Menu.css';

export const Menu = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const dispatch = useDispatch();
  const menuItems = useSelector(getMenuItems);
  const menuList = useSelector(getMenuList);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const renderFoodItems = () => {
    const selectedMenuItem = menuList.find(item => item._id === selectedButton);

    if (selectedMenuItem) {
      return selectedMenuItem.food.map(foodItem => {
        return (
          <div className="food__item" key={foodItem._id}>
            <div className="food__photo">
              <img src={cat} alt="sad cat" />
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
      dispatch(increaseQuantity({ id: existingItem.id }));
      toast.success('The item quantity has been increased.');
    } else {
      const newItem = {
        ...foodItem,
        src: cat,
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
            {menuList.map((item, index) => (
              <button
                className={`menu__btn ${
                  selectedButton === item.id ? 'active' : ''
                }`}
                type="button"
                key={item._id}
                onClick={() => handleButtonClick(item._id)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="menu__content--wrap">
            {selectedButton && <div className="menu__content">{renderFoodItems()}</div>}
          </div>
        </div>
      </Container>
    </section>
  );
};

