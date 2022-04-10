import React, { memo } from 'react';
import cn from 'clsx';
import text from './lang_ru.json';
import { PracticeCoverTemplate } from '../PracticeCoverTemplate';
import s from './SumDifPractice.module.sass';

export type SumDifPracticeProps = {
  className?: string;
};

export const SumDifPractice = memo<SumDifPracticeProps>(({ className }) => (
  <PracticeCoverTemplate
    className={cn(s.root, className)}
    type={text.type}
    title={text.title}
    desc={text.desc}
    level={1}
  >
    PracticeCoverTemplate
  </PracticeCoverTemplate>
));

SumDifPractice.displayName = 'SumDifPractice';
