import React from 'react';

export type ImageType = {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  favorites: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
};

interface IProps {
  image: ImageType;
  searchTag: (tagText: string) => void;
  openFull: (imageId: number) => void;
}

const ImageCard: React.FC<IProps> = ({ image, searchTag, openFull }) => {
  //   const history = useHistory();
  const handleSearchTag = (tag: string) => {
    searchTag(tag);
    // history.push(tag);
  };
  return (
    <div className="flex flex-col justify-between max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <input
        type="image"
        onClick={() => openFull(image.id)}
        onKeyDown={() => openFull(image.id)}
        className="object-cover w-full h-64"
        src={image.webformatURL}
        alt={image.tags}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-purple-500 text-xl mb-2">Photo by {image.user}</h2>
        <ul>
          <li>Views: {image.views}</li>
          <li>Likes: {image.likes}</li>
          <li>Downloads: {image.downloads}</li>
        </ul>
      </div>
      <ul className="px-6 pb-4">
        {image.tags.split(', ').map((tag, index) => (
          <li
            key={`${tag}_${index}`}
            className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition-colors">
            <button
              className="w-full px-3 py-1 rounded-full "
              onClick={() => handleSearchTag(tag)}>
              #{tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageCard;
