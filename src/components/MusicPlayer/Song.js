import React from "react"
import styled from "styled-components"
import Image from "../Images/Images"

const Song = ({ currentSong }) => {
  return (
    <SongContainer>
      <Image
        className="shadow"
        filename={`${currentSong.cover}.jpg`}
        alt={currentSong.name}
      />

      <H1>{currentSong.name}</H1>
      <H2>{currentSong.artist}</H2>
    </SongContainer>
  )
}

const SongContainer = styled.div`
  min-height: 50vh;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const H1 = styled.h2`
  padding: 1rem 1rem 1rem 1rem;
`

const H2 = styled.h3`
  font-size: 1rem;
`

export default Song
