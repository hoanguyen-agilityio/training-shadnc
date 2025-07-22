// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { CarouselWithTopControls } from './index';

export default {
  title: 'Components/Carousel/CarouselWithTopControls',
  component: CarouselWithTopControls,
  decorators: [
    (Story) => (
      <div className="@container/main">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof CarouselWithTopControls>;

export const CarouselDefault: Story = {
  args: {},
};
