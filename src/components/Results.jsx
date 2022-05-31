import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Loading} from './Loading'

import {useResultContext} from '../contexts/ResultsContectProvider'

const Results = () => {
const {results, isLoading, getResults, searchTerm} = useResultContext();
const location = useLocation();

useEffect(() => {
  getResults('/search/q=JavaScript Mastery&num=40')
}, [])

console.log(location.pathname)
if(isLoading) return <Loading/>

  switch(location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results.map(({link,title}, index) => (
              <div key={index} className="md:w-2/5 w-full">
                  <a href={link} target="_blank" rel="noreferrer">
                    <p className='text-sm'>
                      {link.length > 30 ? link.substring(0, 30) : link}
                    </p>
                    <p className='text-lg hover:underline dark:text-blue-700'>

                    </p>
                  </a>
              </div>
          ))}
        </div>
      );
    case '/images':
      return 'SEARCH';
    case '/news':
      return 'SEARCH';
    case '/videos':
      return 'SEARCH';
    default:
      return 'ERROR';   
  }

}

export default Results