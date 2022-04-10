import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SurveyItem, SurveyItemProps, SurveyValueItem } from './SurveyItem';

export default {
  title: 'Survey/SurveyItem',
  component: SurveyItem,
} as ComponentMeta<typeof SurveyItem>;

const items = [
  { id: '1', value: 'opt 1' },
  { id: '2', value: 'opt 2' },
  { id: '3', value: 'opt 3' },
];

export const Template: ComponentStory<typeof SurveyItem> = (args: SurveyItemProps) => {
  const [value, onChange] = useState<SurveyValueItem>();
  return <SurveyItem {...args} value={value as SurveyValueItem} onChange={onChange} items={items} />;
};
