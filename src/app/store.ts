import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import powerReducer from '../features/power/powerSlice'

export const store = configureStore({
  reducer: {
    power: powerReducer,
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
