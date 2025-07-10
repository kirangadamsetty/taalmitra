import {createContext, useEffect, useState, useContext} from "react"
import {SongsContext} from "./SongsContext.jsx"
export const AudioContext = createContext()


const AudioContextProvider = ({children}) =>{
const {audioRef} = useContext(SongsContext)
const [currentTime, setCurrentTime] = useState(null)
const [duration, setDuration] = useState(null)

  useEffect(()=>{
    let audio = audioRef.current
    const handleTimeUpdate = ()=>{
        setCurrentTime(audio.currentTime)
    }
    const handleLoadedMetaData = () =>{
        setDuration(audio.duration)
    }
   if(audio){
     audio.addEventListener("timeupdate", handleTimeUpdate) 
    audio.addEventListener("loadedmetadata", handleLoadedMetaData)
   }
    return () =>{
        audio.removeEventListener("timeupdate", handleTimeUpdate)
        audio.removeEventListener("loadedetadata", handleLoadedMetaData)
    }
  }, [])
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
const handleSeek = (e) => {
  const rect = e.currentTarget.getBoundingClientRect(); 
  const clickX = e.clientX - rect.left; // how far from the left was clicked
  const width = rect.width;

  const percent = clickX / width;
  const newTime = percent * duration;

  audioRef.current.currentTime = newTime;
  setCurrentTime(newTime); // optional, UI sync
};

    return(
        <AudioContext.Provider value = {{formatTime,handleSeek, currentTime, duration}}>
            {children}
        </AudioContext.Provider>
    )
}

export default AudioContextProvider


