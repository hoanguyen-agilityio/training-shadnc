// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Pagination } from './index';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof Pagination>;

export const PaginationDefault: Story = {
  args: {},
};
