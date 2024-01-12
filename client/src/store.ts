import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import RegisterPageSlice from './components/RegiserPage/regiserSlace';

const store = configureStore({
  reducer: {
    register: RegisterPageSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
