import { Avatar as AvatarShadcn, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Avatar = () => (
  <AvatarShadcn>
    <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
    <AvatarFallback>CN</AvatarFallback>
  </AvatarShadcn>
);
