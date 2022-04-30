import { v4 as uuidv4 } from "uuid"
import m1 from "../../../static/musics/01.mp3"
import m2 from "../../../static/musics/02.mp3"
import m3 from "../../../static/musics/03.mp3"
import m4 from "../../../static/musics/04.mp3"
import m5 from "../../../static/musics/05.mp3"
import m6 from "../../../static/musics/06.mp3"
import m7 from "../../../static/musics/07.mp3"
import m8 from "../../../static/musics/08.mp3"
import m9 from "../../../static/musics/09.mp3"
import m10 from "../../../static/musics/10.mp3"

function chillHop() {
  return [
    {
      name: "1",
      cover: "s1",
      artist: "sunny.vibes",
      audio: m1,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "2",
      cover: "spring",
      artist: "love.vibes",
      audio: m2,
      color: ["#668EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "3",
      cover: "beach",
      artist: "chill.vibes",
      audio: m3,
      color: ["#CD221D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "4",
      cover: "winter",
      artist: "cozy.vibes",
      audio: m4,
      color: ["#118EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "5",
      cover: "sunny2",
      artist: "fresh.vibes",
      audio: m5,
      color: ["#226011", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "6",
      cover: "r1",
      artist: "romantic.vibes",
      audio: m6,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "7",
      cover: "s2",
      artist: "fresh.vibes",
      audio: m7,
      color: ["#668EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "8",
      cover: "hills",
      artist: "cold.vibes",
      audio: m8,
      color: ["#CD221D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "9",
      cover: "w2",
      artist: "cozy.vibes",
      audio: m9,
      color: ["#118EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "10",
      cover: "cloudy",
      artist: "romantic.vibes",
      audio: m10,
      color: ["#226011", "#c94043"],
      id: uuidv4(),
      active: false,
    },
  ]
}

export default chillHop
