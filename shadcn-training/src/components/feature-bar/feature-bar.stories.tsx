// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { FeatureBar } from './index';

export default {
  title: 'Components/FeatureBar',
  component: FeatureBar,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof FeatureBar>;

export const TabsDefault: Story = {
  args: {},
};
