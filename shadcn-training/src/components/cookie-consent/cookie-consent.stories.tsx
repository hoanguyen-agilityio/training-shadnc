// Libs
import type { Meta, StoryObj } from '@storybook/react-vite';

// Components
import { CookieConsent } from './index';

export default {
  title: 'Components/CookieConsent',
  component: CookieConsent,
  decorators: [],
} as Meta;

type Story = StoryObj<typeof CookieConsent>;

export const CookieConsentDefault: Story = {
  args: {},
};
