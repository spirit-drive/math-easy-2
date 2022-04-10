import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, Props } from './Icon';
import icons from './icons';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'number' },
    type: { control: null },
  },
  args: {
    fontSize: 28,
  },
} as ComponentMeta<typeof Icon>;

export const Template: ComponentStory<typeof Icon> = ({ color, fontSize, ...args }: Props & { fontSize: number }) => (
  <div style={{ color, fontSize }}>
    {Object.keys(icons).map((type) => (
      <Icon {...args} key={type} type={type as keyof typeof icons} />
    ))}
  </div>
);
