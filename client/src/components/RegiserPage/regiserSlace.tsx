import * as api from './api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RegiserState } from './type/RegiserState';
import { RegisterData } from './type/RegisterData';

const initialState: RegiserState = {
  registerData: [],
};

export const registerUser = createAsyncThunk(
  'auth/registerFetch',
  async (data: RegisterData) => {
    if (data.password !== data.passwordRepeat) {
      throw new Error('Пароли не совпадают');
    }
    if (
      !data.login.trim() ||
      !data.email.trim() ||
      !data.password.trim() ||
      !data.passwordRepeat.trim() ||
      !data.telephone.trim()
    ) {
      throw new Error('Не все поля заполнены!');
    }
    const userData = await api.registerFetch(data);
    return [userData];
  }
);

const RegiserPageSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.registerData = action.payload;
    });
  },
});
export default RegiserPageSlice.reducer;
