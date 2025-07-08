import telugu50 from "../assets/top_50/telugu_top_50.jpg";
import playButton from "../assets/play_button.png";
import previousButton from "../assets/previous.png";
import nextButton from "../assets/next-button.png";
import volume from "../assets/volume-up.png";
import Form from 'react-bootstrap/Form';
import whiteHeart from "../assets/heart_white.png"
function SongPlayer() {
  return (
    <div className="box-color w-100 fixed-bottom" style={{ paddingBottom: "4px" }}>
      {/* Progress Bar */}
      <div style={{ position: "relative", width: "100%", height: "4px", backgroundColor: "white", borderRadius: "4px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "50%", backgroundColor: "#d32f2f" }}></div>
      </div>

      {/* Player Controls */}
      <div className="px-3 d-flex justify-content-between align-items-center" style={{ height: "60px", position: "relative" }}>
        
        {/* Left Section: Song Info */}
        <div className="d-flex gap-3 align-items-center" style={{ minWidth: "200px" }}>
          <img src={telugu50} style={{ width: "55px", height: "55px", borderRadius: "5px", objectFit: "cover" }} />
          <div>
            <h5 className="red-text-color mb-0" style={{ fontSize: "16px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "150px" }}>Laal Pari</h5>
            <p className="text-white detail-info mb-0">From Housefull 5</p>
           
            
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
          <img width="20" height="20" src={previousButton} style={{ cursor: "pointer" }} />
          <img width="50" height="50" src={playButton} className="mx-1" style={{ cursor: "pointer" }} />
          <img width="20" height="20" src={nextButton} style={{ cursor: "pointer" }} />
        </div>

        {/* Right Section: Time & Volume */}
        <div className="d-flex gap-3 align-items-center justify-content-end" style={{ minWidth: "220px" }}>
          <p className="detail-info mb-0" style={{ borderRadius: "8px", color: "white", border: "1px solid white", padding: "4px 8px" }}>
            <span>10:30</span><span> / </span><span>10:40</span>
          </p>
          <div className="d-flex align-items-center gap-2">
            <img src={volume} width="25" height="25" />
            <Form.Range style={{ maxWidth: "100px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongPlayer;
