import { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledHome = styled.div`
  display: flex;
  justify-content: space-around;
`

export default function Home () {
  return (
    <StyledHome>
      <div>Home</div>
    </StyledHome>
  )  
}