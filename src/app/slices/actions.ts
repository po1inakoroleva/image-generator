'use client';

import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react';

export const sendFormData = createAsyncThunk(
  'generatedPicture/sendFormData',
  async (e: React.FormEvent<HTMLFormElement>) => {
    const response = await fetch('/api/predictions', {
      method: 'POST',
      body: new FormData(e.currentTarget),
    });
    const data = await response.json();
    return data;
  },
);

export const checkStatus = createAsyncThunk(
  'generatedPicture/checkStatus',
  async (pictureId: string) => {
    const response = await fetch(`/api/predictions/${pictureId}`, { cache: 'no-store' });
    const data = await response.json();
    return data;
  },
);
