// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { NavigationTrail } from './index';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/NavigationTrail',
  component: NavigationTrail,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof NavigationTrail>;

export const BreadcrumbDefault: Story = {
  args: {
    breadcrumbName: 'Shop',
  },
};
