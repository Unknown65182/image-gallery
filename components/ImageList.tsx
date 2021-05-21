import React, { useEffect, useState } from 'react';
import ImageCard, { ImageType } from './ImageCard';
import ImageFull from './ImageFull';
import ImageSearch from './ImageSearch';
import fetcher from '../libs/fetcher';
import useSWR from 'swr';
import { useRouter } from 'next/router';

interface IProps {
  tag: string;
}

const ImageList: React.FC<IProps> = ({ tag }) => {
  const router = useRouter();
  const { data, error } = useSWR<{ hits: ImageType[] }>(
    `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&q=${
      tag === 'all' ? '*' : tag
    }&image_type=photo&pretty=true`,
    fetcher,
  );

  const [fullImage, setFullImage] = useState<number | null>(null);

  if (error) return <div>failed to load :(</div>;
  if (!data)
    return (
      <div className="container flex flex-col justify-items-center">
        <ImageSearch searchImages={(tag) => router.push(tag)} />
        <button
          type="button"
          className="flex justify-center items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-black transition ease-in-out duration-150">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading ...
        </button>
      </div>
    );
  return (
    <div className="container">
      <ImageSearch searchImages={(tag) => router.push(tag)} />
      {data.hits.length === 0 && (
        <h2 className="text-5xl text-center mx-auto mt-32">No Images Found</h2>
      )}
      <div className="grid grid-cols-3 gap-10">
        {data.hits.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            searchTag={(tag) => router.push(tag)}
            openFull={(imageId) => setFullImage(imageId)}
          />
        ))}
      </div>
      {fullImage && (
        <ImageFull imageId={fullImage} closeImage={() => setFullImage(null)} />
      )}
    </div>
  );
};

export default ImageList;
