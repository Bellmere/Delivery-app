import React, { useState, useEffect } from 'react';
import { useMenuState } from 'components/Menu/MenuState';
import BaseInput from 'components/Fields/BaseInput';
import { Container } from 'components/styled/Container';
import { MainButton } from 'components/Buttons/Main/MainButton';

import './CLientForm.css';

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
    <section className="order__section">
      <Container>
        <form className="order-from" onSubmit={handleSubmit}>
          <div className="order-form--wrapper">
            <div className="credentials--wrap">
              <div className="credentials__item">
                <BaseInput
                  name="name"
                  type="text"
                  label="Name:"
                  placeholder="Name:"
                />
              </div>
              <div className="credentials__item">
                <BaseInput
                  name="email"
                  type="email"
                  label="Email:"
                  placeholder="Email:"
                />
              </div>
              <div className="credentials__item">
                <BaseInput
                  name="tel"
                  type="tel"
                  label="Phone:"
                  placeholder="Phone:"
                />
              </div>
              <div className="credentials__item">
                <BaseInput
                  name="adress"
                  type="text"
                  label="Address:"
                  placeholder="Address:"
                />
              </div>
            </div>
            <div className="order-items">
              <ul>
                {menuState.cartItems.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-submit--wrap">
            <input
              type="text"
              name="totalPrice"
              value={`Total Price: $${totalPrice}`}
              disabled
            />
            <MainButton>Submit</MainButton>
          </div>
        </form>
      </Container>
    </section>
  );
};
