// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { ModeToggle } from './index';

export default {
  title: 'Components/ModeToggle',
  component: ModeToggle,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof ModeToggle>;

export const ModeToggleDefault: Story = {
  args: {},
};
