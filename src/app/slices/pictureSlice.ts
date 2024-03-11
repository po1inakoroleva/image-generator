/* eslint-disable no-param-reassign */

'use client';

import { createSlice } from '@reduxjs/toolkit';
import { Prediction } from 'replicate';

import type { RootState } from './index.ts';
import { sendFormData, checkStatus } from './actions.ts';

interface PictureState {
  picture: Prediction | null,
  status: 'idle' | 'starting' | 'processing' | 'succeeded' | 'failed',
  error: string | null
}

const initialState: PictureState = {
  picture: null,
  status: 'idle',
  error: null,
};

export const pictureSlice = createSlice({
  name: 'generatedPicture',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendFormData.fulfilled, (state, action) => {
        state.status = 'starting';
        state.picture = action.payload;
      })
      .addCase(sendFormData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message ?? 'Unknown error';
      })
      .addCase(checkStatus.fulfilled, (state, action) => {
        state.picture = action.payload;
        state.status = action.payload.status;
      });
  },
});

export const selectPicture = (state: RootState) => state.generatedPicture;

export default pictureSlice.reducer;
