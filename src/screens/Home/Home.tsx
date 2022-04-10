import React, { FC } from 'react';
import { SumDifPractice } from 'src/components/practices';
import s from './Home.module.sass';

export const Home: FC = () => (
  <div className={s.root}>
    <SumDifPractice />
  </div>
);
