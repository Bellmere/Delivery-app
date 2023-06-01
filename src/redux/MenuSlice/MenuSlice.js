import { createSlice } from '@reduxjs/toolkit';
import { fetchMenu } from './operations';

export const MenuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuList: [],
    items: [],
    status: 'idle',
    error: null,
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
  extraReducers: builder => {
    builder
      .addCase(fetchMenu.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.menuList = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { add, increaseQuantity, decreaseQuantity, remove } = MenuSlice.actions;

export default MenuSlice.reducer;
