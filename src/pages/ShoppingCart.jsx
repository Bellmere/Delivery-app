import React from 'react';
import { Container } from '../components/styled/Container';
import { ClientForm } from '../components/Forms/ClientForm/CLientForm';
import { useMenuState } from '../components/Menu/MenuState';

export default function ShoppingCart() {
  const menuState = useMenuState();

  return (
    <section>
      <Container>
        <ClientForm cartItems={menuState.cartItems} />
      </Container>
    </section>
  );
}
