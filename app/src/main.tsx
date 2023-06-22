import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
import './index.css';
import NavBar from './components/Videos/navBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<VideoList />} />
        <Route path='/new' element={<VideoForm />} />
        <Route path='/update/:id' element={<VideoForm />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
