// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Subscribe } from './index';

export default {
  title: 'Components/Subscribe',
  component: Subscribe,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof Subscribe>;

export const SubscribeDefault: Story = {
  args: {},
};
