import playButton from "../assets/play_button.png";
import previousButton from "../assets/previous.png";
import nextButton from "../assets/next-button.png";
import volumeButton from "../assets/volume-up.png";
import Form from 'react-bootstrap/Form';
import whiteHeart from "../assets/heart_white.png"
import pauseButton from "../assets/pause-button.png"

import {useContext , useState} from "react"
import {SongsContext} from "../utils/SongsContext.jsx"
import play_button from "../assets/play_button.png"
import {AudioContext} from "../utils/AudioContext.jsx"



function SongPlayer() {
  const {handleNext,handlePrevious, audioRef,currentPlayingSong ,handleUpdatedPlayButton,play,pause,handleUpdatedPauseButton} = useContext(SongsContext)
 const {currentTime, duration, formatTime , handleSeek} = useContext(AudioContext)
 const [volume, setVolume] = useState(1); // volume range: 0.0 to 1.0

  const handlePause = (data) =>{
    pause()
    handleUpdatedPauseButton(data)
  }
  const handlePlay = (data) =>{
    play()
    handleUpdatedPlayButton(data)
 }
  return  (
    <div className="box-color w-100 fixed-bottom" style={{ height:"74px" }}>
      {/* Progress Bar */}
    <div
  onClick={(e) => handleSeek(e)}
  style={{
    position: "relative",
    width: "100%",
    height: "4px",
    backgroundColor: "white",
    borderRadius: "4px",
    overflow: "hidden",
    cursor: "pointer",
  }}
>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: `${(currentTime / duration) * 100}%`,
      backgroundColor: "#d32f2f",
    }}
  ></div>
</div>


      {/* Player Controls */}
      <div className="px-3 d-flex justify-content-between align-items-center" style={{ height: "60px", position: "relative" }}>
        
        {/* Left Section: Song Info */}
        <div className="d-flex gap-3 align-items-center" style={{ minWidth: "200px" }}>
          <img src={currentPlayingSong.image} style={{ width: "55px", height: "55px", borderRadius: "5px", objectFit: "cover" }} />
          <div>
            <h5 className="red-text-color mb-0" style={{ fontSize: "16px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "150px" }}>{currentPlayingSong.song_name}</h5>
            <p className="text-white detail-info mb-0">{currentPlayingSong.movie_name} - {currentPlayingSong.music_director}</p>
                      
          </div>
         <div className = "ms-2">
<img src = {whiteHeart}  width="30" height="30"/>
         </div>

           
        </div>

        {/* Center Section: Controls - Center Aligned Absolutely */}
        <div style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "18px"
        }}>
          <img width="20" height="20" onClick = {()=>handlePrevious(currentPlayingSong)} src={previousButton} style={{ cursor: "pointer" }} />
         {currentPlayingSong.playing ? <img onClick = {()=>handlePause(currentPlayingSong)} src = {pauseButton} width={37} height={37}/>: <img onClick = {()=>handlePlay(currentPlayingSong)} src = {play_button} width={40} height={40}/> } 
          <img width="20" height="20" onClick = {()=>handleNext(currentPlayingSong)} src={nextButton} style={{ cursor: "pointer" }} />
        </div>

        {/* Right Section: Time & Volume */}
        <div className="d-flex gap-3 align-items-center justify-content-end" style={{ minWidth: "220px" }}>
          <p className="detail-info mb-0" style={{ borderRadius: "8px", color: "white", border: "1px solid white", padding: "4px 8px" }}>
            <span>{formatTime(currentTime)}</span><span> / </span><span>{formatTime(duration)}</span>
          </p>
          <div className="d-flex align-items-center gap-2">
            <img src={volumeButton} width="25" height="25" />
            <Form.Range
  style={{ maxWidth: "100px" }}
  min={0}
  max={100}
  value={volume * 100}
  onChange={(e) => {
    const newVolume = e.target.value / 100; // Convert 0–100 to 0.0–1.0
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  }}
/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SongPlayer;
