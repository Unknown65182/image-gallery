import React, { useState } from 'react';
interface IProps {
  searchImages: (searchText: string) => void;
}

const ImageSearch: React.FC<IProps> = ({ searchImages }) => {
  const [searchText, setSearchText] = useState<string>('');
  //   const history = useHistory();
  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchImages(searchText);
    // history.push(searchText);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-green-500 py-2">
          <input
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
