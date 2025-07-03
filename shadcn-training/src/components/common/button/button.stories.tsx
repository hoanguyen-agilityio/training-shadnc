// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Button } from './index';
import { ArrowIcon } from '@/components/icons';

export default {
  title: 'Components/Common/Button',
  component: Button,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof Button>;

export const ButtonDefault: Story = {
  args: {
    label: 'Button',
  },
};

export const ButtonWithVariants: Story = {
  args: {
    label: 'Button',
    size: 'sm',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    label: 'Button',
    icon: <ArrowIcon width="24px" height="24px" fill="white" />,
    className: 'flex gap-2 w-[250px]',
  },
};
