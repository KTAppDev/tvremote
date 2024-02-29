
// TVRemote.tsx

import React from 'react';

interface TVRemoteProps {
  onUpClick: () => void;
  onDownClick: () => void;
  onLeftClick: () => void;
  onRightClick: () => void;
  onNetflixClick: () => void;
  onYouTubeClick: () => void;
  onMenuClick: () => void;
}

const TVRemote: React.FC<TVRemoteProps> = ({
  onUpClick,
  onDownClick,
  onLeftClick,
  onRightClick,
  onNetflixClick,
  onYouTubeClick,
  onMenuClick,
}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        className="w-12 h-12 bg-blue-500 text-white rounded-full"
        onClick={onUpClick}
      >
        Up
      </button>
      <div className="flex items-center space-x-4">
        <button
          className="w-12 h-12 bg-red-500 text-white rounded-full"
          onClick={onLeftClick}
        >
          Left
        </button>
        <button
          className="w-12 h-12 bg-green-500 text-white rounded-full"
          onClick={onRightClick}
        >
          Right
        </button>
      </div>
      <button
        className="w-12 h-12 bg-yellow-500 text-white rounded-full"
        onClick={onDownClick}
      >
        Down
      </button>
      <div className="flex items-center space-x-4">
        <button
          className="w-12 h-12 bg-red-500 text-white rounded-full"
          onClick={onNetflixClick}
        >
          Netflix
        </button>
        <button
          className="w-12 h-12 bg-youtube-red text-white rounded-full"
          onClick={onYouTubeClick}
        >
          YouTube
        </button>
        <button
          className="w-12 h-12 bg-gray-500 text-white rounded-full"
          onClick={onMenuClick}
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default TVRemote;
