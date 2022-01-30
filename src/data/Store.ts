import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ApplicationSlice from './Slices/ApplicationSlice';

export const RootReducer = combineReducers({
  Application: ApplicationSlice.reducer,
});

const store = configureStore({
  reducer: RootReducer,
});

export type IState = ReturnType<typeof RootReducer>;

export default store;
