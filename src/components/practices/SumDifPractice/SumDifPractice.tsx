import React, { memo } from 'react';
import cn from 'clsx';
import s from './SumDifPractice.module.sass';

export type SumDifPracticeProps = {
  className?: string;
};

export const SumDifPractice = memo<SumDifPracticeProps>(({ className }) => (
  <div className={cn(s.root, className)}>SumDifPractice</div>
));

SumDifPractice.displayName = 'SumDifPractice';
