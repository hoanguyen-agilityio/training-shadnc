// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Banner } from './index';

export default {
  title: 'Components/Banner',
  component: Banner,
  decorators: [
    (Story) => (
      <div className="@container/main max-w-container">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Banner>;

export const BannerDefault: Story = {
  args: {
    title: 'About US',
  },
};
