import React, { memo } from 'react';
import cn from 'clsx';
import { Frame } from 'src/components/Frame';
import { Logo } from 'src/components/Logo';
import text from './lang_ru.json';
import s from './Header.module.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const Header = memo<Props>(({ className }) => (
  <header className={cn(s.root, className)}>
    <Frame className={s.frame}>
      <Logo className={s.logo} />
      <div>{text.logo}</div>
    </Frame>
  </header>
));

Header.displayName = 'HeaderOrigin';
