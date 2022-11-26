import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom'


const StyledHome = styled.div`
  text-align: center;
  .header {
    color: rgb(171, 191, 212);
  }
  .movieList {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    color: rgb(171, 191, 212);
  }
  .movie {
    border: 2px solid rgb(171, 191, 212);
    border-radius: 9px;
    min-width: 200px;
    padding: 10px;
    text-align: left;
  }
  .title {
    text-align: center;
    font-size: 25px;
    color: white;
    border-bottom: 1px solid rgb(171, 191, 212);
    margin-bottom: 10px;
    padding-bottom: 5px;
  }
  .newMovieButton {
    border: 2px solid rgb(171, 191, 212);
    border-radius: 9px;
    display:flex;
    align-items: center;
    justify-content: center;

  }
  #newMovieIcon {
    height: 50px;
  }
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  .navLink:active {
    text-decoration: none;
  }
`

export default function Home () {

  const [movies, setMovies] = useState()

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get('http://localhost:3001/api/movies')
      setMovies(response.data)
    }
    getMovies()
  }, [])

  let navigate = useNavigate()

  const movieDetails = (movieId) => {
    navigate(`/movies/${movieId}`)
  }

  return (movies) ? (
    <StyledHome>
      <div className='header'>Movie Wiki</div>
      <div className='movieList'>
        {
          movies.map((movie) => {
            return (
              <div className='movie' key={movie.id} onClick={() => movieDetails(movie.id)}>
                <div className='title'>{movie.title}</div>
                <div className='genre'>Genre: {movie.genre}</div>
                <div className='releaseDate'>Release: {movie.releaseDate}</div>
                <div className='director'>Director: {movie.director.firstName} {movie.director.lastName}</div>
              </div>
            )
          })
        }
        <div className='newMovieButton'>
          <NavLink to="/addmovie" className='navLink'><FontAwesomeIcon className='navLink' icon={faPlus} id='newMovieIcon'/></NavLink>
        </div>
        </div>
    </StyledHome>
  ) : null
}