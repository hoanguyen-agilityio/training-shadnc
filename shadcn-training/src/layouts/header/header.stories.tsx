// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

// Layouts
import { Header } from './index';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY;

export default {
  title: 'Layouts/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
          <div className="@container/structure">
            <Story />
          </div>
        </ClerkProvider>
      </MemoryRouter>
    ),
  ],
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const MenuDefault: Story = {
  args: {},
};
