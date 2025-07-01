import { Badge as BadgeShadcn } from '@/components/ui/badge';
import { ComponentProps } from 'react';

interface IBadge extends ComponentProps<typeof BadgeShadcn> {
  name: string;
}

export const Badge = ({ name, ...props }: IBadge) => (
  <BadgeShadcn {...props} className="rounded px-2 py-[3px]">
    {name}
  </BadgeShadcn>
);
