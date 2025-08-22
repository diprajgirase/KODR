import React from 'react';
import VideoCard from './VideoCard';

const VideoGrid = () => {
  const videos = [
    {
      id: 1,
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      title: 'Never Gonna Give You Up - Rick Astley',
      channel: 'Rick Astley',
      views: '1.2B views',
      timestamp: '12 years ago',
      duration: '3:33'
    },
    {
      id: 2,
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      title: 'Learn React in 1 Hour - Full Beginner\'s Tutorial',
      channel: 'Programming with Mosh',
      views: '5.7M views',
      timestamp: '2 years ago',
      duration: '1:00:00'
    },
    {
      id: 3,
      thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg',
      title: 'Learn JavaScript - Full Course for Beginners',
      channel: 'freeCodeCamp.org',
      views: '15M views',
      timestamp: '3 years ago',
      duration: '3:26:43'
    },
    {
      id: 4,
      thumbnail: 'https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg',
      title: 'Learn CSS Position In 9 Minutes',
      channel: 'Web Dev Simplified',
      views: '1.8M views',
      timestamp: '2 years ago',
      duration: '9:26'
    },
    {
      id: 5,
      thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg',
      title: 'Build a Netflix Clone with React',
      channel: 'Clever Programmer',
      views: '4.2M views',
      timestamp: '1 year ago',
      duration: '2:30:00'
    },
    {
      id: 6,
      thumbnail: 'https://i.ytimg.com/vi/1Gq0mFhqN8M/maxresdefault.jpg',
      title: 'Learn Flexbox in 20 Minutes',
      channel: 'Web Dev Simplified',
      views: '1.1M views',
      timestamp: '1 year ago',
      duration: '19:31'
    },
    {
      id: 7,
      thumbnail: 'https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg',
      title: 'Learn CSS Grid in 20 Minutes',
      channel: 'Web Dev Simplified',
      views: '2.3M views',
      timestamp: '2 years ago',
      duration: '19:20'
    },
    {
      id: 8,
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      title: 'Build A Weather App With Vanilla JavaScript',
      channel: 'Traversy Media',
      views: '1.5M views',
      timestamp: '3 years ago',
      duration: '33:20'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 pb-16 overflow-hidden">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          timestamp={video.timestamp}
          thumbnail={video.thumbnail}
          duration={video.duration}
        />
      ))}
    </div>
  );
};

export default VideoGrid;