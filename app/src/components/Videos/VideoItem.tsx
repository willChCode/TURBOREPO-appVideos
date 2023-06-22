import React from 'react';
import { Video } from './Video';
import ReactPlayer from 'react-player';
import { FaTimes, FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { deleteVideo } from './VideoService';
import { toast } from 'react-toastify';

interface Props {
  video: Video;
  loadVideos: () => Promise<void>;
}

export default function VideoItem({ video, loadVideos }: Props) {
  const navigate = useNavigate();

  const handleClick = async (id: string) => {
    await deleteVideo(id);
    loadVideos();
    toast.success('Vidoe deleted successfully');
  };

  return (
    <div
      className='card hover:shadow-lg hover:shadow-gray-700'
      style={{ cursor: 'pointer' }}>
      <div className='flex justify-between px-4 items-center'>
        <h1 className='title'>{video.title}</h1>
        <span className='flex gap-2'>
          <FaPen
            title='Edit'
            className='text-green-400 hover:text-green-500 text-xs'
            onClick={() => navigate(`/update/${video._id}`)}
          />
          <FaTimes
            title='Delete'
            className='text-red-400 hover:text-red-500'
            onClick={() => video._id && handleClick(video._id)}
          />
        </span>
      </div>

      <iframe
        src={video.url}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>

      {/* <ReactPlayer url={video.url} /> */}
      <p className='paragraph'>{video.description}</p>
    </div>
  );
}
