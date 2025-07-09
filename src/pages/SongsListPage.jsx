import "../styles/songsInfoPage.css"
import whiteHeart from "../assets/heart_white.png"
import play_button from "../assets/play_button.png"
import {useContext} from "react"
import { SongsContext } from "../utils/SongsContext"
import pauseButton from "../assets/pause-button.png"

function SongsListPage(){
    const {filteredData, audioRef,pause, play,handleUpdatedPauseButton,selectedPlayList,handleUpdatedPlayButton}  = useContext(SongsContext)
 
   const handlePlay = (data) =>{

    audioRef.current.src = data.src
    play()
    handleUpdatedPlayButton(data)
   
   }

   const handlePause = (data) =>{
   pause()
    handleUpdatedPauseButton(data)
   }

    return(
        <div className = "songsInfo-background songsInfoPage" style = {{minHeight:"100dvh" }}>

      
      <div className = "d-flex gap-4 p-4">
     <img src = {selectedPlayList.image} width = "200" height = "200"/>
     <div className = "align-self-end">
 
           <h6 className = "songs-detail-info">Album</h6>
        <h1>{selectedPlayList.description}</h1>
        <h4>{selectedPlayList.detailInfo}</h4>
          <h6 className  = "songs-detail-info">10 Songs</h6>
    
     </div>
      </div>
      <div className = "songs-list-container" >
      {filteredData.map((data)=>{
          return(
            <div key  = {data.id} className = "px-4 d-flex justify-content-between align-items-center song-container"  >
 <div className = "d-flex align-items-center gap-4">
     
           {data.playing ? <img onClick = {()=>handlePause(data)} src = {pauseButton}  width= "30" height = "30" /> : <img onClick ={()=>handlePlay(data)} src = {play_button}  width= "30" height = "30" /> } 
             <div style ={{minWidth:"300px", maxWidth:"300px"}}>
 <p className  = "song-list-title">{data.song_name}</p>
             <p className = "detail-info">{data.movie_name} - {data.music_director}</p>
             </div>
             <img  src = {whiteHeart} width= "30" height = "30"/>
           

            </div>
          <h6 className  = "songs-detail-info">10:30</h6>
            </div>
           
          )
      })}
      </div>


        </div>
    )
}
export default SongsListPage

