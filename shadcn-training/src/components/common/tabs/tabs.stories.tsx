// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { Tabs } from './index';

// Mocks
import { PRODUCTS_HOME_PAGE, TABS_LABEL } from '@/mocks';

export default {
  title: 'Components/Common/Tabs',
  component: Tabs,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof Tabs>;

export const TabsDefault: Story = {
  args: {
    tabs: TABS_LABEL,
    cards: PRODUCTS_HOME_PAGE,
  },
};
