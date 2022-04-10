import React, { memo } from 'react';
import cn from 'clsx';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import s from './Logo.module.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const Logo = memo<Props>(({ className }) => (
  <Link className={cn(s.root, className)} to="/">
    <Icon type="logo" className={s.img} />
  </Link>
));

Logo.displayName = 'Logo';
