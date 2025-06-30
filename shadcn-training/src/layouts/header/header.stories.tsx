import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Layouts/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const MenuDefault: Story = {
  args: {},
};
