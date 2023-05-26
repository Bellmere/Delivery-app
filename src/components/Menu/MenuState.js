import { useState, useEffect } from 'react';

export const useMenuState = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = foodItem => {
    setCartItems([...cartItems, foodItem]);
  };

  const handleButtonClick = buttonId => {
    setSelectedButton(buttonId);
  };

  return {
    cartItems,
    selectedButton,
    handleAddToCart,
    handleButtonClick,
  };
};
