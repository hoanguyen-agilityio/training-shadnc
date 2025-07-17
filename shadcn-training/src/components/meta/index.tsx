import { useEffect, useState } from 'react';

export const MetaTags = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <>
      <title>ShadCN Training | Modern Fashion & Lifestyle</title>
      <meta
        name="description"
        content="Explore the latest trends in fashion and lifestyle. Shop new arrivals and curated collections on ShadCN Training."
      />
      <meta property="og:title" content="ShadCN Training | Modern Fashion & Lifestyle" />
      <meta
        property="og:description"
        content="Discover stylish collections, new fashion arrivals, and more from ShadCN Training."
      />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={`${url}left-home-banner.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ShadCN Training | Modern Fashion & Lifestyle" />
      <meta
        name="twitter:description"
        content="Shop modern collections and fashion-forward designs at ShadCN Training."
      />
      {url && <meta name="twitter:url" content={url} />}
      <meta
        name="twitter:image"
        content="https://shadcn-training.vercel.app/left-home-banner.svg"
      />
    </>
  );
};
