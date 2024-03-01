'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

const About: FC = () => {
  const t = useTranslations('MainPage');

  return (
    <div className="relative max-w-screen-xl p-4 px-4 mb-10 mx-auto bg-white dark:bg-gray-700 sm:px-6 lg:px-8 py-26 lg:mt-20">
      <h2 className="text-center font-semibold text-xl leading-10 text-indigo-500 uppercase">
        <a id={t('anchors.about')}>{t('anchors.about')}</a>
      </h2>
      <p className="my-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
        {t('about.text')}
      </p>
      <div className="flex justify-center">
        <a href="https://github.com/po1inakoroleva" target="_blank">
          <img src="/images/github-mark.svg" className="flex mt-10 max-w-md lg:block" />
        </a>
      </div>
    </div>
  );
};

export default About;
