import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productsReducer } from './productapi';
import { jeweleryReducer } from './jewelery';
import { electronicReducer } from './electronic';
import { DetailsReducer } from './GetDetails';

export const store = configureStore({
  reducer: {
    ProductsReducer:productsReducer,
    JeweleryReducer:jeweleryReducer,
    ElectronicReducer:electronicReducer,
    detailsReducer:DetailsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
