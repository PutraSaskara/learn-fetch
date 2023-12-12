"use client"
import React, { useState, useEffect } from 'react';
import Card from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../components/Loading'
import Blank from '../public/blank.jpg'

function MapCard() {
  const [anime, setAnime] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
      const data = await response.json();

      // Check if there is more data
      if (data.data.length > 0) {
        setAnime([...anime, ...data.data]);
        setPage(page + 1 );
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run once when component mounts



  return (
      <div className=''>

      <InfiniteScroll
        dataLength={anime ? anime.length : 0} // This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<Loading/>}
        endMessage={
          <p className='text-center'>
            Yay! You have seen it all
          </p>
        }
      >
        <div className='grid grid-cols-5'>
        {anime.map((item, index) => (
          <Card key={index} title={item.title} image={item.images.webp.image_url} synopsis={item.synopsis} />
        ))}
    </div>
      </InfiniteScroll>
      </div>
  );
}

export default MapCard;
