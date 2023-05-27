import { createSlice } from '@reduxjs/toolkit';

export const MenuSlice = createSlice({
  name: 'food',
  initialState: {
    items: [],
  },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
      }
    },
    remove(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const { add, increaseQuantity, decreaseQuantity, remove } =
  MenuSlice.actions;
