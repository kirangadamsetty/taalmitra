import "../styles/homeCards.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import {useNavigate} from "react-router-dom"
import {useContext} from "react"

import 'swiper/css';
import { SongsContext } from "../utils/SongsContext";


function HomeCards({data}) {
    const { setSelectedSongs} = useContext(SongsContext)
    const navigate = useNavigate()
  return (
    <div className = "mt-5">
<h4>{data[0].title}</h4>
<p className  = "detail-info detail-info-head">{data[0].detailInfo}</p>
    
     <Swiper
      spaceBetween={30}
      slidesPerView={3}
     
    >
     
   
    
      {data.slice(1).map((li) => (
        <>
        <SwiperSlide key={li.id} style = {{cursor:"pointer"}} onClick  ={()=>{setSelectedSongs(li);navigate("/songsInfo")}} className="home-card-container">
         
  <img src={li.image} alt="poster" className="home-card-img" />
 
         <div className = "p-1">
 <p className= "text-white" style = {{marginBottom:"-1px", fontWeight:"500"}}>{li.description}</p>
    <p className  = "detail-info">{li.detailInfo}</p>
         </div>
          
     </SwiperSlide>   
  
     </>
      ))}
    </Swiper>

    </div>
  );
}
export default HomeCards;
