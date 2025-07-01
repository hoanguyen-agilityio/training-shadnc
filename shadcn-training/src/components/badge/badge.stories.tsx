// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Badge } from './index';

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof Badge>;

export const BadgeDefault: Story = {
  args: {
    name: 'Sale 50%',
  },
};

export const BadgeDestructive: Story = {
  args: {
    name: 'Best Sale',
    variant: 'destructive',
  },
};
