import { top50Data } from "../utils/mockdata"
import "../styles/songsInfoPage.css"
import whiteHeart from "../assets/heart_white.png"
import play_button from "../assets/play_button.png"
function SongsListPage(){
    return(
        <div className = " songsInfo-background songsInfoPage" style = {{minHeight:"100dvh" }}>

      
      <div className = "d-flex gap-4 p-4">
     <img src = {top50Data[1].image} width = "200" height = "200"/>
     <div className = "align-self-end">
 
           <h6 className = "songs-detail-info">Album</h6>
        <h1>{top50Data[1].description}</h1>
        <h4>{top50Data[1].detailInfo}</h4>
          <h6 className  = "songs-detail-info">10 Songs</h6>
    
     </div>
      </div>
      <div className = "songs-list-container" >
      {top50Data.map((data)=>{
          return(
            <div className = "px-4 d-flex justify-content-between align-items-center song-container">
 <div className = "d-flex align-items-center gap-4">
            <img src = {play_button} width= "30" height = "30"/>
             <div style ={{minWidth:"300px", maxWidth:"300px"}}>
 <p className  = "song-list-title">{data.description}</p>
             <p className = "detail-info">{data.detailInfo}</p>
             </div>
             <img src = {whiteHeart} width= "30" height = "30"/>


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

