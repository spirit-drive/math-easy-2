import React, { memo } from 'react';
import cn from 'clsx';
import s from './Frame.module.sass';

export type Props = {
  className?: string;
  children: React.ReactNode | React.ReactChildren;
};

export const Frame = memo<Props>(({ className, children }) => <div className={cn(s.root, className)}>{children}</div>);

Frame.displayName = 'Frame';
