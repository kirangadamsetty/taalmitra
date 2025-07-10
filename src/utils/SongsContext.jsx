import {createContext,useEffect, useRef, useState} from "react"
import { teluguTopSongs } from "./teluguSongsData"

import { hindiTopSongs } from "./hindiSongsData"
export const SongsContext = createContext()

export const SongsContextProvider = ({children})=>{
const [singlePageData, setSinglePageData] = useState([])
const allSongs = [...teluguTopSongs, ...hindiTopSongs]
const [selectedPlayList, setSelectedPlayList] = useState([])
const [songsList, setSongsList]  = useState([])
let [filteredData, setFilteredData] = useState([])
const audioRef = useRef()
const [currentPlayingSong, setCurrentPlayingSong] = useState(null)
const play = () =>{
    if(audioRef.current) return audioRef.current.play()
}
const pause = () =>{
    if(audioRef.current) return audioRef.current.pause()
}
useEffect(()=>{
    let updatedData = allSongs.map((data)=> ({...data , playing : false}))
    setSongsList(updatedData)
},[])

const handleFilteredData = (li) =>{
    
      let updatedData = songsList.filter((data)=>{
         return  li.category === data.category && li.language === data.language
              
            
         })
           setFilteredData(updatedData) 


}

const handleUpdatedPlayButton = (data)=>{
    setCurrentPlayingSong({...data, playing:true})
    let updatedData = filteredData.map((li)=> li.id === data.id ? {...li, playing:true} : {...li, playing:false})
    setFilteredData(updatedData)

}

const handleNext = (data) => {
  const index = filteredData.findIndex((li) => li.id === data.id);
  
  // Ensure index is valid and next song exists
  if (index !== -1 && index + 1 < filteredData.length) {
    const nextSong = filteredData[index + 1];

    setCurrentPlayingSong(nextSong);
    handleUpdatedPlayButton(nextSong); // Assuming this sets `playing: true` on the right song
    audioRef.current.src = nextSong.src; // or whatever your audio field is
    play()
  }
};

const handlePrevious  = (data) =>{
    const index = filteredData.findIndex((li) => li.id === data.id);
  
  // Ensure index is valid and next song exists
  if (index !== -1 && index - 1 >= 0) {
    const prevSong = filteredData[index - 1];

    setCurrentPlayingSong(prevSong);
    handleUpdatedPlayButton(prevSong); // Assuming this sets `playing: true` on the right song
    audioRef.current.src = prevSong.src; // or whatever your audio field is
    play()
  }
}
const  handleUpdatedPauseButton = (data) =>{

    setCurrentPlayingSong({...data, playing:false})
    let updatedData = filteredData.map((li)=>li.id === data.id ? {...li, playing : false} : li)
    setFilteredData(updatedData)
}



    return(
      <SongsContext.Provider value = {{singlePageData, setSinglePageData,handleNext, handlePrevious,handleUpdatedPauseButton,selectedPlayList,filteredData, setSelectedPlayList, handleFilteredData, handleUpdatedPlayButton,currentPlayingSong, setCurrentPlayingSong, audioRef, play, pause , songsList}}>
        {children}
      </SongsContext.Provider>
    )
}





