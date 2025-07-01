// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Evaluate } from './index';

export default {
  title: 'Components/Evaluate',
  component: Evaluate,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof Evaluate>;

export const MenuDefault: Story = {
  args: {
    value: 5,
  },
};
