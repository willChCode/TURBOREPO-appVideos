import {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  MouseEventHandler
} from 'react';
import { Video, Params } from './Video';
import { postVideos, getVideo, putVideo } from './VideoService';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

export default function VideoForm() {
  const navigate = useNavigate();
  const params = useParams<Params>();

  const initialState = {
    title: '',
    description: '',
    url: ''
  };
  const [inputV, setInputV] = useState<Video>(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputV({ ...inputV, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (params.id) {
      await putVideo(params.id, inputV);
      toast.success('Video updated successfully');
      setInputV(initialState);
    } else {
      await postVideos(inputV);
      toast.success('New video added');
      setInputV(initialState);
    }

    navigate('/');
  };

  const getVideoById = async (id: string) => {
    const res = await getVideo(id);
    const { title, description, url } = res.data[0];
    setInputV({ title, description, url });
  };

  useEffect(() => {
    if (params.id) getVideoById(params.id);
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='w-3/4 h-auto m-auto border-2 mt-4 flex flex-col items-center content-center p-5 gap-4'>
        <h2 className='font-bold text-xl'>Post Videos</h2>
        <input
          name='title'
          onChange={handleInputChange}
          className='inputs'
          type='text'
          placeholder='title'
          value={inputV.title}
        />
        <input
          name='description'
          onChange={handleInputChange}
          className='inputs'
          type='text'
          placeholder='description'
          value={inputV.description}
        />
        <input
          name='url'
          onChange={handleInputChange}
          className='inputs'
          type='text'
          placeholder='url'
          value={inputV.url}
        />
        {params.id ? (
          <button className='bg-green-500 px-3 py-0.5 font-semibold text-white rounded-xl'>
            Update
          </button>
        ) : (
          <button className='bg-red-500 px-3 py-0.5 font-semibold text-white rounded-xl'>
            Save
          </button>
        )}
      </form>
    </>
  );
}
