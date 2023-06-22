import { useEffect, useState } from 'react';
import axios from 'axios';
import { Video } from './Video';
import { getVideos } from './VideoService';
import VideoItem from './VideoItem';

export default function VideoList() {
  const [videos, setVideos] = useState<Video[]>([]);

  // cargando datos y ordenando los videos por su feca de creacion
  const loadVideos = async () => {
    const res = await getVideos();
    const dataFormat = res
      .map(video => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    setVideos(dataFormat);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className='h-auto bg-gray-100 flex items-center justify-center flex-wrap gap-6 py-8'>
      {videos.map(video => {
        return <VideoItem key={video._id} video={video} loadVideos={loadVideos}/>;
      })}
    </div>
  );
}
