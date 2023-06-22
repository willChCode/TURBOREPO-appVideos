import axios from 'axios';
import { Video } from './Video';

const baseUrl = 'http://localhost:3002/videos';
const getVideos = async () => {
  const res = await axios.get<Video[]>(baseUrl);
  return res.data;
};

const postVideos = async (video: Video) => {
  return await axios.post(baseUrl, video);
};

const getVideo = async (id: string) => {
  return await axios.get<Video[]>(`${baseUrl}/${id}`);
};

const putVideo = async (id: string, video: Video) => {
  return await axios.put<Video>(`${baseUrl}/${id}`, video);
};

const deleteVideo = async (id: string) => {
  return await axios.delete<Video>(`${baseUrl}/${id}`);
};

export { getVideos, postVideos, getVideo, putVideo, deleteVideo };
