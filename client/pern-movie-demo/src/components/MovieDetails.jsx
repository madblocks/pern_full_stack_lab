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
  
  let { id } = useParams()
  console.log(id)

  const [ movie, setMovie ] = useState()

  useEffect(() => {
    console.log(id)
    // const getMovie = async () => {
    //   const response = await axios.get(`http://localhost:3001/api/movies/${id}`)
    //   setMovie(response.data)
    // }
    // getMovie()
  }, [id])

  return (movie ? (
    <StyledMovie>
      {/* <div className='title'>{movie.title}</div>
      <div className='genre'>Genre: {movie.genre}</div>
      <div className='releaseDate'>Release: {movie.releaseDate}</div>
      <div className='director'>Director: {movie.director.firstName} {movie.director.lastName}</div> */}
    </StyledMovie>
  ) : null)
}