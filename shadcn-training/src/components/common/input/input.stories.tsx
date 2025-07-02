// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Input } from './index';

export default {
  title: 'Components/Common/Input',
  component: Input,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof Input>;

export const InputDefault: Story = {
  args: {
    variant: 'default',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    name: 'email',
    htmlFor: 'email',
  },
};

export const InputPrimary: Story = {
  args: {
    label: 'Email',
    variant: 'primary',
    type: 'email',
    placeholder: 'Enter your email',
    name: 'email',
    htmlFor: 'email',
  },
};
