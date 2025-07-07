// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { CarouselWithSideControls } from './index';

export default {
  title: 'Components/carousel/CarouselWithSideControls',
  component: CarouselWithSideControls,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof CarouselWithSideControls>;

export const CarouselWithSideControlsDefault: Story = {
  args: {},
};
