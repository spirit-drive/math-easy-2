import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header, Props } from './Header';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    energy: { control: 'number', defaultValue: 123428 },
    experience: { control: 'number', defaultValue: 1343 },
  },
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = ({ ...args }: Props & { fontSize: number; error: string }) => (
  <Header {...args} />
);
