import React from 'react';
import HomeHeader from '../components/HomeHeader';
import MovieCarrusel from '../components/MovieCarrusel';
import SelectVenue from '../components/SelectVenue';
import MovieList from '../components/MovieList';
import FloatMenu from '../components/FloatMenu';

export default function Home() {
  function handleSearch() {
    console.log('search');
  }

    //float menu
  return (
    <>
      <HomeHeader handleSearch={handleSearch}/>
      <SelectVenue />
      <MovieCarrusel/>
      <MovieList />
      <FloatMenu />
    </>
    );
}