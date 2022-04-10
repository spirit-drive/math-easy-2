import React, { memo, useCallback, useRef, useEffect } from 'react';
import cn from 'clsx';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
import { SurveyItemCheckbox } from 'src/components/SurveyItem/SurveyItemCheckbox';
import s from './SurveyItem.module.sass';

export type SurveyValueItem = { [id: string]: boolean };
export type SurveyDataItem = { id: string; value: string };

export type SurveyItemProps = {
  className?: string;
  children?: never;
  value: SurveyValueItem;
  items: SurveyDataItem[];
  onChange: (value: SurveyValueItem) => void;
};

export const SurveyItem = memo<SurveyItemProps>(({ className, items, value, onChange }) => {
  const valueCopy = useRef(value);
  useEffect(() => {
    valueCopy.current = value;
  }, [value]);

  const handleChange = useCallback(
    (e: CheckboxChangeEvent) => {
      const { checked, name } = e.target;
      onChange({ ...(valueCopy.current || {}), [name]: checked });
    },
    [onChange]
  );

  return (
    <div className={cn(s.root, className)}>
      {items.map((item) => (
        <SurveyItemCheckbox name={item.id} key={item.id} checked={value?.[item.id]} onChange={handleChange}>
          {item.value}
        </SurveyItemCheckbox>
      ))}
    </div>
  );
});

SurveyItem.displayName = 'SurveyItem';
