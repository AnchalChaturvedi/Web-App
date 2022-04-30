import React, { useState, useRef } from "react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"

// Import components
import Player from "../components/MusicPlayer/Player"
import Song from "../components/MusicPlayer/Song"
import Library from "../components/MusicPlayer/Library"
import Nav from "../components/MusicPlayer/Nav"
// Import data
import data from "../components/MusicPlayer/data"

const MusicPlayer = () => {
  // Ref
  const audioRef = useRef(null)

  // State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })

  // Functions
  const updateTimeHandler = e => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({ ...songInfo, currentTime, duration })
  }

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id)
    let nextSong = songs[(currentIndex + 1) % songs.length]
    await setCurrentSong(nextSong)

    const newSongs = songs.map(song => {
      if (song.id === nextSong.id) {
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

    if (isPlaying) {
      audioRef.current.play()
    }
  }

  return (
    <Layout>
      <section className="music-section">
        <div className="container py-5">
          <AppContainer
            className="card border-primary shadow mb-4"
            style={{
              backgroundColor:
                "#" + Math.random().toString(16).slice(-6) + "10",
            }}
            libraryStatus={libraryStatus}
          >
            <Nav
              libraryStatus={libraryStatus}
              setLibraryStatus={setLibraryStatus}
            />
            <Song currentSong={currentSong} />
            <Player
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}
              songInfo={songInfo}
              setSongInfo={setSongInfo}
              songs={songs}
              setSongs={setSongs}
            />
            <Library
              songs={songs}
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
              libraryStatus={libraryStatus}
              setLibraryStatus={setLibraryStatus}
            />

            <audio
              onLoadedMetadata={updateTimeHandler}
              onTimeUpdate={updateTimeHandler}
              onEnded={songEndHandler}
              ref={audioRef}
              src={currentSong.audio}
            >
              <track
                src=""
                kind="captions"
                srcLang="en"
                label="english_captions"
              />
            </audio>
          </AppContainer>
        </div>
      </section>
    </Layout>
  )
}

const AppContainer = styled.div`
  transition: all 0.5s ease;
  margin-left: ${p => (p.libraryStatus ? "20rem" : "0")};
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`

export default MusicPlayer
