import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className=' border-b-2 px-10'>
      <nav className='flex gap-2 text-slate-700 p-2 font-bold'>
        <Link className='hover:bg-slate-300 hover:rounded-md px-2 py-1' to='/'>
          HOME s
        </Link>
        <Link
          className='hover:bg-slate-200 hover:rounded-md px-2 py-1 ml-auto'
          to='/new'>
          Create new videos
        </Link>
        <Link className='hover:bg-slate-200 hover:rounded-md px-2 py-1' to='#'>
          My favorite videos
        </Link>
      </nav>
    </div>
  );
}
