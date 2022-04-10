import React, { memo } from 'react';
import cn from 'clsx';
import { getBeautifulNumber } from 'src/utils/helpers';
import text from './lang_ru.json';
import s from './PracticeCover.module.sass';

export type PracticeCoverProps = {
  className?: string;
  level: number;
  onClick: () => void;
  title: React.ReactNode;
  type: React.ReactNode;
  desc?: React.ReactNode;
};

export const PracticeCover = memo<PracticeCoverProps>(({ className, type, onClick, desc, title, level }) => (
  <div onClick={onClick} role="presentation" className={cn(s.root, className)}>
    <div className={s.top}>
      <div className={s.type}>{type}</div>
      <div className={s.bottom}>
        <div className={s.level}>{`${text.level}:`}</div>
        <div>{getBeautifulNumber(level)}</div>
      </div>
    </div>
    <div className={s.content}>
      <div className={s.title}>{title}</div>
      <div className={s.desc}>{desc}</div>
    </div>
  </div>
));

PracticeCover.displayName = 'PracticeCover';
