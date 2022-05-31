import React from 'react'
import {Routes, Route, Redirect} from 'react-router-dom';
import Search from './Search';
import Results from './Results';

const Routers = () => {
  return (
    <div className='p-4'>
        <Routes>
            <Route path="/" element={<Search/>}/>
            <Route path={"/search"} element={<Results/>}/>
            <Route path={"/images"} element={<Results/>}/>
            <Route path={"/news"} element={<Results/>}/>
            <Route path={"/videos"} element={<Results/>}/>
        </Routes>
    </div>
  )
}

export default Routers