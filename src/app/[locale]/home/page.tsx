'use client';

import { FC } from 'react';
import { Provider } from 'react-redux';

import Form from '../../components/HomePage/Form.tsx';
import store from '../../slices/index.ts';

const HomePage: FC = () => (
  <Provider store={store} >
    <Form />
  </Provider>
);

export default HomePage;
