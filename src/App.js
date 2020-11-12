import React, { useEffect, useState } from 'react'

import MovieRow from './components/MovieRow/';
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

import tmdb from './tmdb';

import './App.css'

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  // const [blackHeader, setBlackHeader] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      //Lista total
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //Destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let n_random = Math.floor(Math.random() *(originals[0].items.results.length - 1) );
      let filme_escolhido = originals[0].items.results[n_random];
      let filme_escolhido_info = await tmdb.getMovieInfo(filme_escolhido.id, 'tv');
      setFeaturedData(filme_escolhido_info);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      <Header />
      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}  />
        )
        )}
      </section>
    </div>
  );
}