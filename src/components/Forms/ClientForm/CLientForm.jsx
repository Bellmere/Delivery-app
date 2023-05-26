import React, { useState, useEffect } from 'react';
import { useMenuState } from 'components/Menu/MenuState';

export const ClientForm = () => {
  const menuState = useMenuState();
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  useEffect(() => {
    // Load inputs from local storage on component mount
    const storedInputs = JSON.parse(localStorage.getItem('formInputs'));
    if (storedInputs) {
      setInputs(storedInputs);
    }
  }, []);

  useEffect(() => {
    // Save inputs to local storage whenever it changes
    localStorage.setItem('formInputs', JSON.stringify(inputs));
  }, [inputs]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', inputs, menuState.cartItems);
  };

  const totalPrice = menuState.cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="input1"
            value={inputs.input1}
            onChange={handleInputChange}
            placeholder="Input 1"
          />
          <input
            type="text"
            name="input2"
            value={inputs.input2}
            onChange={handleInputChange}
            placeholder="Input 2"
          />
          <input
            type="text"
            name="input3"
            value={inputs.input3}
            onChange={handleInputChange}
            placeholder="Input 3"
          />
          <input
            type="text"
            name="input4"
            value={inputs.input4}
            onChange={handleInputChange}
            placeholder="Input 4"
          />
        </div>
        <div className="row">
          <h3>Cart Items:</h3>
          <ul>
            {menuState.cartItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="row">
          <input
            type="text"
            name="totalPrice"
            value={`Total Price: $${totalPrice}`}
            disabled
          />
        </div>
        <div className="row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
