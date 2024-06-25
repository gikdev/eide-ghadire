import { CaretCircleLeft, CaretCircleRight, PauseCircle, PlayCircle } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react"
import musics from "../musics.json"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const audioRef = useRef(null)
  const currentMusic = musics[currentIndex]
  const { name, singer, imgURL, audioURL, theme } = currentMusic
  let themeStyles = {}

  switch (theme) {
    case "primary":
      themeStyles = {
        text: "text-primary-dark",
        border: "border-primary-dark",
        bg: "bg-primary-light",
      }
      break
    case "secondary":
      themeStyles = {
        text: "text-secondary-dark",
        border: "border-secondary-dark",
        bg: "bg-secondary-light",
      }
      break
    case "tertiary":
      themeStyles = {
        text: "text-tertiary-dark",
        border: "border-tertiary-dark",
        bg: "bg-tertiary-light",
      }
      break
    default:
      themeStyles = {
        text: "text-neutral-dark-1",
        border: "border-neutral-dark-1",
        bg: "bg-neutral-light-2",
      }
      break
  }

  useEffect(() => {
    audioRef.current.playbackRate = 1
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying)
  }
  function next() {
    const numToSet = currentIndex >= musics.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(numToSet)
    setIsPlaying(false)
  }
  function nextAndPlay() {
    const numToSet = currentIndex >= musics.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(numToSet)
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(true), 500)
  }
  function previous() {
    const numToSet = currentIndex <= 0 ? musics.length - 1 : currentIndex - 1
    setCurrentIndex(numToSet)
    setIsPlaying(false)
  }

  return (
    <div
      className={`flex flex-col items-center gap-10 shadow-image p-4 rounded-2xl max-w-max mx-auto ${themeStyles.bg}`}
    >
      <audio onEnded={nextAndPlay} ref={audioRef} src={audioURL} />
      <img
        src={imgURL}
        alt=""
        className={`rounded-2xl max-w-[12.5rem] aspect-square w-full border-4 object-cover shadow-image ${themeStyles.border}`}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-neutral-dark-1 text-heading-3 text-center">{name}</h3>
        <p className="text-neutral-dark-2 text-center">{singer}</p>
        <p className="text-neutral-dark-2 text-center text-xs">
          درحال پخش {currentIndex + 1} از {musics.length}
        </p>
      </div>
      <div className={`flex items-center gap-2 ${themeStyles.text}`}>
        <button onClick={next} type="button" className="active:scale-90">
          <CaretCircleRight weight="fill" size={48} />
        </button>
        <button type="button" className="active:scale-90" onClick={toggleIsPlaying}>
          {isPlaying ? (
            <PauseCircle weight="fill" size={64} />
          ) : (
            <PlayCircle weight="fill" size={64} />
          )}
        </button>
        <button onClick={previous} type="button" className="active:scale-90">
          <CaretCircleLeft weight="fill" size={48} />
        </button>
      </div>
    </div>
  )
}
