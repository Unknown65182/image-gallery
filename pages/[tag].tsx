import { useRouter } from 'next/router';
import React from 'react';
import ImageList from '../components/ImageList';

const tag = () => {
  const router = useRouter();
  const { tag } = router.query;
  if (!tag) {
    return null;
  }
  return <ImageList tag={tag as string} />;
};

export default tag;
