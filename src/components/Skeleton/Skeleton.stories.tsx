import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton, Props } from './Skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Template: ComponentStory<typeof Skeleton> = (args: Props) => <Skeleton {...args} />;
