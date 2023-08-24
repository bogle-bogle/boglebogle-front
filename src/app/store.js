import { configureStore } from '@reduxjs/toolkit';
import memberReducer from '../feature/member/member';

const store = configureStore({
  reducer: { member: memberReducer },
});

export default store;
