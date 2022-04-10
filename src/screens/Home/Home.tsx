import React, { FC } from 'react';
import { Frame } from 'src/components/Frame';
import { SumDifPractice } from 'src/components/practices';
import s from './Home.module.sass';

export const Home: FC = () => (
  <div className={s.root}>
    <Frame>
      <SumDifPractice />
    </Frame>
  </div>
);
