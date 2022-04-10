import * as React from 'react';
import cn from 'clsx';
import { HTMLAttributes, memo } from 'react';
import icons from './icons';
import s from './Icon.module.sass';

export type IconType = keyof typeof icons;

export type Props = HTMLAttributes<HTMLElement> & {
  className?: string;
  children?: never;
  type: IconType;
};

export const Icon = memo<Props>(({ type, className, ...props }) => {
  const Raw = icons[type];
  return (
    <i {...props} className={cn(s.root, className)}>
      <Raw />
    </i>
  );
});

Icon.displayName = 'Icon';
