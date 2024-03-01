'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { AnchorProps } from '../../types.ts';
import Dropdown from './Dropdown.tsx';

const Anchor: FC<AnchorProps> = ({ name }) => {
  const href = `#${name}`;
  return (
    <a href={href} className="mx-3 text-lg text-indigo-500 uppercase cursor-pointer hover:text-gray-300">
      {name}
    </a>
  );
};

const StartButton: FC = () => {
  const t = useTranslations('MainPage.header');
  return (
    <a href="/en/home" className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 dark:bg-indigo-500 hover:bg-gray-900">
      {t('startBtn')}
    </a>
  );
};

const Header: FC = () => {
  const t = useTranslations('MainPage');
  const anchorNames: readonly string[] = [t('anchors.examples'), t('anchors.instructions'), t('anchors.about')];

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-25 bg-white dark:bg-gray-700">
      </div>
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container px-6 py-4 mx-auto md:px-12">
          <div className="items-center justify-center md:flex">
            <div className="flex items-center justify-between">
              <Dropdown anchorsNames={anchorNames} />
            </div>
            <div className="items-center hidden md:flex">
              {anchorNames.map((name) => <Anchor key={anchorNames.indexOf(name)} name={name} />)}
            </div>
          </div>
        </nav>
      </header>
      <div className="bg-white dark:bg-gray-700 overflow-hidden relative">
        <div className="container relative z-10 flex items-start py-32 mx-auto">
          <div className="relative ml-10 w-1/2 px-6 z-10 flex flex-col items-start">
            <h1 className="font-extrabold text-balance leading-tight text-gray-800 dark:text-gray-100 text-6xl sm:text-8xl">
              {t('header.title')}
            </h1>
            <StartButton />
          </div>
        </div>
        <img src="/images/header.svg" className="absolute mt-10 top-20 right-10 hidden max-w-1/2 lg:block" />
      </div>
    </div>
  );
};

export default Header;
