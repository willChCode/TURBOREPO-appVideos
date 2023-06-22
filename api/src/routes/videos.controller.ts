import { RequestHandler } from 'express';
import Video from './videos';

const getVideos: RequestHandler = async (req, res) => {
  const videos = await Video.find({});
  res.json(videos);
};
const getVideo: RequestHandler = async (req, res) => {
  const video = await Video.find({ _id: req.params.id });
  res.json(video);
};
const postVideo: RequestHandler = async (req, res) => {
  console.log(req.body);
  const video = new Video(req.body);

  const savedVideo = await video.save();
  res.json(savedVideo);
};
const updateVideo: RequestHandler = async (req, res) => {
  const upVideo = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(upVideo);
};
const deleteVideo: RequestHandler = async (req, res) => {
  const delVideo = await Video.findByIdAndDelete({ _id: req.params.id });
  res.json(delVideo);
};

export { getVideos, getVideo, postVideo, updateVideo, deleteVideo };
