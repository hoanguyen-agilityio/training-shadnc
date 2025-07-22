// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

// Layouts
import { Footer } from './index';

export default {
  title: 'Layouts/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="@container/structure">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const MenuDefault: Story = {
  args: {},
};
