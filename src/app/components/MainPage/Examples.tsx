'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { BenefitProps } from '../../types.ts';

const Benefit: FC<BenefitProps> = ({ text }) => (
  <li className="mt-6 lg:mt-0">
    <div className="flex">
      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </span>
      <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
        {text}
      </span>
    </div>
  </li>
);

const Examples: FC = () => {
  const t = useTranslations('MainPage');
  const benefits: readonly string[] = [t('examples.benefits.24/7'), t('examples.benefits.free'), t('examples.benefits.unlim'), t('examples.benefits.easily')];

  return (
    <div id="examples" className="relative max-w-screen-xl p-4 mb-20 mx-auto bg-white dark:bg-gray-700 sm:px-4 lg:px-6 py-26 lg:mt-20">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
              <a>{t('anchors.examples')}</a>
            </p>
            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
              {t('examples.title')}
            </h4>
            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
              {t('examples.description')}
            </p>
            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
              {benefits.map((item) => <Benefit key={benefits.indexOf(item)} text={item} />)}
            </ul>
          </div>
          <div className="relative mt-10 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex lg:-mxc-4 items-end justify-center space-x-4 lg:justify-start">
                <img className="w-36 rounded-lg shadow-lg md:w-56" width="200" src="/images/man-comp.png" alt="example#1" />
                <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src="/images/woman-presentation.png" alt="example#2" />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img className="w-40 rounded-lg shadow-lg md:w-64" width="200" src="/images/man-paint.png" alt="example#3" />
                <img className="w-36 rounded-lg shadow-lg md:w-56" width="200" src="/images/doctor.png" alt="example#4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
