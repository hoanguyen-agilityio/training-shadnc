// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Dropdown } from './index';
import { CATEGORY_OPTIONS, SORT_OPTIONS } from '@/mocks';

export default {
  title: 'Components/Common/Dropdown',
  component: Dropdown,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof Dropdown>;

export const DropdownDefault: Story = {
  args: {
    defaultValue: 'Select Category',
    options: CATEGORY_OPTIONS,
  },
};

export const DropdownWithLabel: Story = {
  args: {
    label: 'Sort by',
    defaultValue: 'Select Category',
    options: SORT_OPTIONS,
  },
};
