import React, { useEffect, useState } from 'react'
import MovieRow from './components/MovieRow/';

import './App.css'
import tmdb from './tmdb';

export default () => {
  const [movieList, setMovieList] = useState([]);
  // const [featuredData, setFeaturedData] = useState([]);
  // const [blackHeader, setBlackHeader] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}  />
        )
        )}
      </section>
    </div>
  );
}