// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Avatar } from './index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarDefault: Story = {
  args: {},
};
