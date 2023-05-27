export const validationForm = ({
  basketItems,
  name,
  email,
  phone,
  address,
}) => {
  const errors = {};
  if (!name) {
    errors.name = 'Name is required';
  }
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email is invalid';
  }
  if (!phone) {
    errors.phone = 'Phone is required';
  }
  if (!address) {
    errors.address = 'Address is required';
  }
  if (basketItems.length <= 0) {
    errors.basketItems = 'Your basket is empty!';
  }
  return errors;
};
