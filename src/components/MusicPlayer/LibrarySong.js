import React from "react"
import styled from "styled-components"
import Image from "../Images/Images"

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
  darkMode,
}) => {
  // Function
  const songSelectHandler = async () => {
    await setCurrentSong(song)
    const curSong = song
    const songList = songs

    const newSongs = songList.map(song => {
      if (song.id === curSong.id) {
        return {
          ...song,
          active: true,
        }
      } else {
        return {
          ...song,
          active: false,
        }
      }
    })
    setSongs(newSongs)

    // check if user is wanting to play a song.
    if (isPlaying) {
      audioRef.current.play()
    }
  }

  const style = {
    width: "20%",
    margin: "10px 0",
    borderRadius: "4px",
  }

  return (
    <LibrarySongContainer
      onClick={songSelectHandler}
      isActive={song.active}
      darkMode={darkMode}
    >
      <Image filename={`${song.cover}.jpg`} alt={song.name} style={style} />
      <LibrarySongDescription>
        <H1>{song.name}</H1>
        <H2>{song.artist}</H2>
      </LibrarySongDescription>
    </LibrarySongContainer>
  )
}
const LibrarySongContainer = styled.div`
  padding: 0 1rem 0 1rem;
  height: 70px;
  width: 100%;
  display: flex;
  transition: all 0.3s ease;
  background: ${p =>
    p.darkMode
      ? p.isActive
        ? "#7a5bad"
        : "#1c1c1c"
      : p.isActive
      ? "#7a5bad"
      : "#eaeaea"};
  &:hover {
    background-color: lightblue;
    transition: all 0.3s ease;
  }
  &.active {
    background-color: pink;
  }
`

const LibrarySongDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const H1 = styled.h3`
  padding-left: 1rem;
  font-size: 1rem;
`

const H2 = styled.h4`
  padding-left: 1rem;
  font-size: 0.7rem;
`

export default LibrarySong
