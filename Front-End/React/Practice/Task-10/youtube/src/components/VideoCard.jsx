import React from 'react';

const VideoCard = ({ title, channel, views, timestamp, thumbnail }) => {
  return (
    <div className="w-full h-full flex flex-col cursor-pointer rounded-lg p-2">
      {/* Thumbnail */}
      <div className="relative w-full pt-[56.25%] bg-gray-800 rounded-xl overflow-hidden flex-shrink-0">
        <img 
          src={thumbnail || 'https://via.placeholder.com/320x180'} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
          10:30
        </span>
      </div>
      
      {/* Video Info */}
      <div className="flex gap-2 mt-2 flex-grow">
        <div className="w-9 h-9 rounded-full bg-gray-600 flex-shrink-0 mt-1">
          {/* Channel Avatar */}
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-white line-clamp-2">
            {title || 'Video Title'}
          </h3>
          <p className="text-xs text-gray-400 mt-1">{channel || 'Channel Name'}</p>
          <div className="flex items-center text-xs text-gray-400">
            <span>{views || '1.2M views'}</span>
            <span className="mx-1">•</span>
            <span>{timestamp || '2 days ago'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;