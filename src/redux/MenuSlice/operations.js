import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://delivery-project.herokuapp.com';

export const fetchMenu = createAsyncThunk('menu/fetchMenu', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/menu');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
