'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Provider } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../../hooks.ts';
import { sendFormData, checkStatus } from '../../slices/actions.ts';
import { selectPicture } from '../../slices/pictureSlice.ts';
import store from '../../slices/index.ts';

export default function Form() {
  const dispatch = useAppDispatch();
  const { status, picture } = useAppSelector(selectPicture);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendFormData(e));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if ((status === 'starting' || status === 'processing') && picture !== null) {
        dispatch(checkStatus(picture.id));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [status, dispatch, picture]);

  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
        <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-white p-10 border-solid border-2 border-gray-300 rounded-3xl">

          <p className="mb-4 text-lg text-gray-700">
            Dream something with{' '}
            <a href="https://replicate.com/stability-ai/stable-diffusion" className="text-blue-500 hover:underline">
              SDXL
            </a>:
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <input
              type="text"
              name="prompt"
              placeholder="Enter a prompt to display an image"
              className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 mt-4 w-full bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Go!
            </button>
          </form>

          {picture && (
            <div className="mt-4">
              {picture.output && (
                <div className="flex flex-col items-center justify-center w-full">
                  <Image
                    src={picture.output[picture.output.length - 1]}
                    alt="output"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full rounded-md border-gray-300"
                  />
                </div>
              )}
              <p className="mt-4 text-lg text-gray-700">status: {picture.status}</p>
            </div>
          )}
        </div>
      </main>
    </Provider>
  );
}
