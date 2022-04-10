import React, { memo } from 'react';
import cn from 'clsx';
import { Checkbox } from 'antd';
import { CheckboxProps } from 'antd/lib/checkbox/Checkbox';
import s from './SurveyItemCheckbox.module.css';

export type SurveyItemCheckboxProps = CheckboxProps & {
  className?: string;
};

export const SurveyItemCheckbox = memo<SurveyItemCheckboxProps>(({ className, ...props }) => (
  <div className={cn(s.root, className)}>
    <Checkbox {...props} />
  </div>
));

SurveyItemCheckbox.displayName = 'SurveyItemCheckbox';
