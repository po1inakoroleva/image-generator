'use client';

import { FC } from 'react';
import { Provider } from 'react-redux';

import Form from '../../components/HomePage/Form.tsx';
import Header from '../../components/HomePage/Header.tsx';
import store from '../../slices/index.ts';

const HomePage: FC = () => (
  <Provider store={store} >
    <Header />
    <Form />
  </Provider>
);

export default HomePage;
