// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { DatePicker } from './index';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof DatePicker>;

export const DatePickerDefault: Story = {
  args: {},
};
