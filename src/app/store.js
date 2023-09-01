import { combineReducers, configureStore } from '@reduxjs/toolkit';
import memberReducer from '../feature/member/member';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const reducers = combineReducers({
  member: memberReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// const store = configureStore({
//   reducer: { member: memberReducer },
// });

export default store;
