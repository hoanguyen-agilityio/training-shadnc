// src/components/MetaTags.tsx
import { META_DATA } from '@/constants';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const MetaTags = () => {
  const { pathname } = useLocation();
  const [url, setUrl] = useState('');
  const meta = META_DATA[pathname] || META_DATA['*'];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.origin);
    }
  }, []);

  const fullUrl = `${url}${pathname}`;
  const imageUrl = meta.image ? `${url}${meta.image}` : undefined;

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:url" content={fullUrl} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </>
  );
};
