import React, { FC, useEffect } from 'react';
import { useQuery } from '../../client';
import { Queries } from '../../client/queries';
import s from './Home.module.sass';

export const Home: FC = () => {
  const [get] = useQuery(Queries.practices);
  useEffect(() => {
    get();
  }, [get]);
  return <div className={s.root}>Home</div>;
};
