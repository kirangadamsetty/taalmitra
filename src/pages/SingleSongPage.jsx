import "../styles/songsInfoPage.css"
import whiteHeart from "../assets/heart_white.png"
import play_button from "../assets/play_button.png"
import {useContext} from "react"
import { SongsContext } from "../utils/SongsContext"
import pauseButton from "../assets/pause-button.png"
function SingleSongPage(){
    const { singlePageData,  audioRef,pause, play,handleUpdatedPauseButton,handleUpdatedPlayButton}  = useContext(SongsContext)
   const handlePlay = (data) =>{

    audioRef.current.src = data.src
    play()
    handleUpdatedPlayButton(data)
   
   }

   const handlePause = (data) =>{
   pause()
    handleUpdatedPauseButton(data)
   }
   const {artist_name, song_name,movie_name,music_director, singer,language } = singlePageData
    return(
        <div className = "songsInfo-background songsInfoPage d-flex justify-content-center" style = {{minHeight:"100dvh" }}>

      
      <div className = "d-flex gap-4 p-4">
     <img src = {singlePageData.image} width = "300" height = "300"/>
     <div >
 
           <h6 className = "songs-detail-info">Album</h6>
        <h1>{song_name}</h1>
         <h6 style = {{fontWeight:"300!impotant", color:"white"}}>{artist_name}</h6>
        <h5 style = {{fontWeight:"300!impotant", color:"white"}}>{movie_name}, {music_director}, {singer}</h5>
      
     <h6 className = "songs-detail-info">{language}</h6>
                {singlePageData.playing ? <img onClick = {()=>handlePause(singlePageData)} src = {pauseButton}  width= "60" height = "60" /> : <img onClick ={()=>handlePlay(singlePageData)} src = {play_button}  width= "60" height = "60" /> } 
     
     </div>
      </div>
  


        </div>
    )
}
export default SingleSongPage

