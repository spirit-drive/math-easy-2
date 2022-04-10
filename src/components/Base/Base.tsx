import React, { memo } from 'react';
import cn from 'clsx';
import { Frame } from 'src/components/Frame';
import s from './Base.module.sass';

export type Props = {
  className?: string;
  children?: React.ReactChildren | React.ReactNode;
};

export const Base = memo<Props>(({ className, children }) => (
  <Frame className={cn(s.root, className)}>
    <div className={s.base}>{children}</div>
  </Frame>
));

Base.displayName = 'Base';
