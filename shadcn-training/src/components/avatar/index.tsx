import { Avatar as AvatarShadcn, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
interface IAvatar {
  src: string;
  alt: string;
  avatarFallback: string;
  className?: string;
}

export const Avatar = ({ src, alt, avatarFallback, className }: IAvatar) => (
  <AvatarShadcn className={className}>
    <AvatarImage src={src} alt={alt} />
    <AvatarFallback>{avatarFallback}</AvatarFallback>
  </AvatarShadcn>
);
