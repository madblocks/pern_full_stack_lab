import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const StyledMovie = styled.div`
  color: rgb(171, 191, 212);
  border: 2px solid rgb(171, 191, 212);
  border-radius: 9px;
  min-width: 200px;
  padding: 10px;
  text-align: left;
  .title {
    text-align: center;
    font-size: 25px;
    color: white;
    border-bottom: 1px solid rgb(171, 191, 212);
    margin-bottom: 10px;
    padding-bottom: 5px;
  }
`

export default function MovieDetails () {
  
  let { movieId } = useParams()

  const [ movie, setMovie ] = useState()

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(`http://localhost:3001/api/movies/${movieId}`)
      setMovie(response.data)
    }
    getMovie()
  }, [movieId])

  return (movie ? (
    <StyledMovie>
      <div className='title'>{movie[0].title}</div>
      <div className='genre'>Genre: {movie[0].genre}</div>
      <div className='releaseDate'>Release: {movie[0].releaseDate}</div>
      <div className='director'>Director: {movie[0].director.firstName} {movie[0].director.lastName}</div>
    </StyledMovie>
  ) : null)
}