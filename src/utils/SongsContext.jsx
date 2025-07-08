import {createContext,useEffect, useRef, useState} from "react"
import { teluguTopSongs } from "./teluguSongsData"

import { hindiTopSongs } from "./hindiSongsData"
export const SongsContext = createContext()

export const SongsContextProvider = ({children})=>{
const allSongs = [...teluguTopSongs, ...hindiTopSongs]
const [selectedSongs, setSelectedSongs] = useState([])
const [songsList, setSongsList]  = useState([])
const audioRef = useRef()
const [musicStatus, setMusicStatus] = useState(false)

const play = () =>{
    if(audioRef.current) return audioRef.current.play()
}
const pause = () =>{
    if(audioRef.current) return audioRef.current.pause()
}

useEffect(()=>{
    if(selectedSongs === null) return;
    else{
        let filteredData = allSongs.filter((data)=>{
            return data.category === selectedSongs.category && data.language === selectedSongs.language
         })
        setSongsList(filteredData)      
    }
},[selectedSongs])

    return(
      <SongsContext.Provider value = {{audioRef, musicStatus, setMusicStatus,play, pause ,selectedSongs, setSelectedSongs, songsList}}>
        {children}
      </SongsContext.Provider>
    )
}





