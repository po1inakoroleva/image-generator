'use client';

import { FC } from 'react';

import Header from '../components/MainPage/Header.tsx';
import Examples from '../components/MainPage/Examples.tsx';
import Instructions from '../components/MainPage/Instructions.tsx';
import About from '../components/MainPage/About.tsx';

const MainPage: FC = () => (
  <>
    <Header />
    <Examples />
    <Instructions />
    <About />
  </>
);

export default MainPage;
