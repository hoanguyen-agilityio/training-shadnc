// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Spinner } from './index';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof Spinner>;

export const PaginationDefault: Story = {
  args: {
    size: 48,
  },
};
