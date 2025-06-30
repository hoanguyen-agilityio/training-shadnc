// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';

// Components
import { Menu } from './index';

export default {
  title: 'Components/Menu',
  component: Menu,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Menu>;

export const MenuDefault: Story = {
  args: {},
};
