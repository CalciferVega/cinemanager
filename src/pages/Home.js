import React from 'react';
import { useNavigate as Navigate } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
import MovieCarrusel from '../components/MovieCarrusel';
import SelectVenue from '../components/SelectVenue';
import MovieList from '../components/MovieList';
import FloatMenu from '../components/FloatMenu';

export default function Home() {
  
  function handleSelectVenue() {
    window.location.assign('/menu');
  }
  
  function handleSearch() {
    console.log('search');
  }
  return (
    <>
      <HomeHeader handleSearch={handleSearch}/>
      <SelectVenue handleSelectVenue={handleSelectVenue}/>
      <MovieCarrusel/>
      <MovieList />
      <FloatMenu />
    </>
    );
}