import React from "react"
import LibrarySong from "./LibrarySong"
import styled from "styled-components"
import { FaMusic } from "react-icons/fa"

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
  darkMode,
}) => {
  return (
    <LibraryContainer libraryStatus={libraryStatus} darkMode={darkMode}>
      <div className="text-center">
        <button
          className="btn btn-outline-primary m-1"
          onClick={() => setLibraryStatus(!libraryStatus)}
        >
          <FaMusic /> Player
        </button>
      </div>
      <SongContainer darkMode={darkMode}>
        {songs.map(song => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            darkMode={darkMode}
          />
        ))}
      </SongContainer>
    </LibraryContainer>
  )
}
const LibraryContainer = styled.div`
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  background-color: ${p => (p.darkMode ? "#1c1c1c" : "#eaeaea")};
  user-select: none;
  overflow-y: scroll;
  transform: translateX(${p => (p.libraryStatus ? "0%" : "-100%")});
  transition: all 0.5s ease;
  opacity: ${p => (p.libraryStatus ? "100" : "0")};
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) tranparent;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: 1500;
  }
`

const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${p => (p.darkMode ? "#1c1c1c" : "#eaeaea")};
`

export default Library
