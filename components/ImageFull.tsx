import React, { useEffect, useState } from 'react';

import { ImageType } from './ImageCard';

interface IProps {
  imageId: number;
  closeImage: () => void;
}

const ImageFull: React.FC<IProps> = ({ imageId, closeImage }) => {
  const [image, setImage] = useState<ImageType>();

  useEffect(() => {
    const getImage = async () =>
      await fetch(
        `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&id=${imageId}&image_type=photo&pretty=true`,
        { credentials: 'omit' },
      )
        .then((res) => res.json())
        .then((data) => {
          setImage(data.hits[0]);
        })
        .catch((err) => console.log(err));

    getImage();
  }, []);
  console.log(image);

  return (
    <div className="fixed top-0 left-0 w-full px-28 py-14">
      {image && <img className="object-cover w-full" src={image.largeImageURL} alt="" />}
      <button className="fixed top-0 right-0 mr-10 mt-10 text-4xl" onClick={closeImage}>
        X
      </button>
    </div>
  );
};

export default ImageFull;
