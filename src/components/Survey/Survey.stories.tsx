import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Survey, SurveyProps, SurveyData, SurveyValue } from './Survey';

export default {
  title: 'Survey/Survey',
  component: Survey,
} as ComponentMeta<typeof Survey>;

const data: SurveyData[] = [
  {
    id: '1',
    value: [
      { id: '1', value: 'opt 1' },
      { id: '2', value: 'opt 2' },
      { id: '3', value: 'opt 3' },
    ],
  },
  {
    id: '2',
    value: [
      { id: '1', value: 'opt 1' },
      { id: '2', value: 'opt 2' },
      { id: '3', value: 'opt 3' },
    ],
  },
  {
    id: '3',
    value: [
      { id: '1', value: 'opt 1' },
      { id: '2', value: 'opt 2' },
      { id: '3', value: 'opt 3' },
    ],
  },
];

export const Template: ComponentStory<typeof Survey> = (args: SurveyProps) => {
  const [value, onChange] = useState<SurveyValue>();
  return <Survey {...args} value={value as SurveyValue} onChange={onChange} items={data} />;
};
