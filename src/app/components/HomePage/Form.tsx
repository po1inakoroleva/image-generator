'use client';

import React, { useEffect, FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '../../hooks.ts';
import { sendFormData, checkStatus } from '../../slices/actions.ts';
import { selectPicture } from '../../slices/pictureSlice.ts';

const Form: FC = () => {
  const t = useTranslations('HomePage');
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
    <main className="flex min-h-screen flex-col items-center justify-center p-3 bg-white dark:bg-gray-700">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex bg-white dark:bg-gray-700 p-10 border-solid border border-gray-300 rounded-3xl">
        <p className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
          {t('title')}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <input
            type="text"
            name="prompt"
            placeholder="Enter a prompt to display an image"
            className="rounded-lg border flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 dark:text-gray-300 dark:bg-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-4 py-2 mt-4 w-full text-white font-semibold bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500 rounded-md focus:outline-none focus:ring-2"
          >
            {t('sbmtBtn')}
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
            <p className="mt-4 text-lg text-gray-700">{t('status')}{picture.status}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Form;
