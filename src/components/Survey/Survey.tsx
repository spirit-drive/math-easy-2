import React, { memo, useEffect, useRef, useMemo } from 'react';
import cn from 'clsx';
import { SurveyItem, SurveyDataItem, SurveyValueItem, SurveyItemProps } from 'src/components/SurveyItem';
import s from './Survey.module.sass';

export type SurveyData = {
  id: string;
  value: SurveyDataItem[];
};

export type SurveyValue = {
  id: string;
  value: SurveyValueItem;
};

export type SurveyProps = {
  className?: string;
  children?: never;
  value: SurveyValue;
  items: SurveyData[];
  onChange: (value: SurveyValue) => void;
};

export const Survey = memo<SurveyProps>(({ className, items, value, onChange }) => {
  const valueCopy = useRef(value);
  useEffect(() => {
    valueCopy.current = value;
  }, [value]);

  const handleChange = useMemo<(id: string) => SurveyItemProps['onChange']>(() => {
    const map: Record<string, SurveyItemProps['onChange']> = {};
    return (id) => {
      if (map[id]) return map[id];

      map[id] = (valueItem) => {
        onChange({ ...(valueCopy.current || {}), [id]: valueItem } as SurveyValue);
      };

      return map[id];
    };
  }, [onChange]);

  return (
    <div className={cn(s.root, className)}>
      {items.map((item) => (
        <SurveyItem
          key={item.id}
          items={item.value}
          value={value?.[item.id as keyof SurveyValue] as SurveyValueItem}
          onChange={handleChange(item.id)}
        />
      ))}
    </div>
  );
});

Survey.displayName = 'SurveyItem';
