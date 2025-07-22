// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Pagination } from './index';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <div className="@container/main">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Pagination>;

export const PaginationDefault: Story = {
  args: {
    totalPages: 5,
    currentPage: 1,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};
