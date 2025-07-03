// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Breadcrumb } from './index';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Breadcrumb>;

export const BreadcrumbDefault: Story = {
  args: {
    breadcrumbName: 'Shop',
  },
};
