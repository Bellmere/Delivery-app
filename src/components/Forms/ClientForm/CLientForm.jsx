import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import BaseInput from 'components/Fields/BaseInput';
import { Container } from 'components/styled/Container';
import { MainButton } from 'components/Buttons/Main/MainButton';
import { validationForm } from 'helpers';
import {
  increaseQuantity,
  decreaseQuantity,
  remove,
} from 'redux/MenuSlice/MenuSlice';

import './CLientForm.css';

export const ClientForm = () => {
  const cartItems = useSelector(state => state.menu.items);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const dataFormInputs = Object.fromEntries(
      Array.from(new FormData(e.target))
    );

    const dataForm = { ...dataFormInputs, basketItems: cartItems };
    const errors = validationForm(dataForm);
    if (Object.keys(errors).length > 0) {
      const errorMessages = Object.values(errors).join('\n');
      return toast.error(errorMessages);
    }
    console.log('Form submitted:', inputs, cartItems, totalPrice);
    return toast.success(
      'The form has been submitted, and our manager will call you in about 5 minutes.'
    );
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item.price * item.quantity;
    return total + itemPrice;
  }, 0);

  const handleIncreaseQuantity = itemId => {
    dispatch(increaseQuantity({ id: itemId }));
  };

  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseQuantity({ id: itemId }));
  };

  const handleDeleteItem = itemId => {
    dispatch(remove({ id: itemId }));
  };

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
                  onChange={handleInputChange}
                />
              </div>
              <div className="credentials__item">
                <BaseInput
                  name="email"
                  type="email"
                  label="Email:"
                  placeholder="Email:"
                  onChange={handleInputChange}
                />
              </div>
              <div className="credentials__item">
                <BaseInput
                  name="phone"
                  type="tel"
                  label="Phone:"
                  placeholder="Phone:"
                  onChange={handleInputChange}
                />
              </div>
              <div className="credentials__item">
                <BaseInput
                  name="address"
                  type="text"
                  label="Address:"
                  placeholder="Address:"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="order-items">
              <ul className="order__list">
                {cartItems.map((item, index) => {
                  const itemPrice = item.price * item.quantity;

                  return (
                    <li className="order__item" key={index}>
                      <div className="order__photo--wrap">
                        <img src={item.src} alt={item.name} />
                      </div>
                      <div className="order__box">
                        <h3>{item.name}</h3>
                        <p>Price: ${itemPrice}</p>
                        <button
                          className="order__quantity__btn order__delete__btn"
                          type="button"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Delete
                        </button>
                        <div className="order__quantity">
                          <input type="number" value={item.quantity} readOnly />
                          <div className="order__quantity__options">
                            <button
                              className="order__quantity__btn order__quantity__btn--up"
                              type="button"
                              onClick={() => handleIncreaseQuantity(item.id)}
                            >
                              +
                            </button>
                            <button
                              className="order__quantity__btn order__quantity__btn--down"
                              type="button"
                              onClick={() => handleDecreaseQuantity(item.id)}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="order-submit--wrap">
            <span>Total price: ${totalPrice}</span>
            <MainButton>Submit</MainButton>
          </div>
        </form>
      </Container>
    </section>
  );
};
