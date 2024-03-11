'use client';

import { configureStore } from '@reduxjs/toolkit';
import pictureReducer from './pictureSlice.ts';

const store = configureStore({
  reducer: {
    generatedPicture: pictureReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
