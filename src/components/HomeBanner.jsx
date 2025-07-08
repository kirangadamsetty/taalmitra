import "../styles/home-banner.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
function HomeBanner({data}) {

  return (
    <div >
<h4>{data[0].title}</h4>
<p className  = "detail-info detail-info-head">{data[0].detailInfo}</p>
    
     <Swiper
      spaceBetween={30}
      slidesPerView={3}
   
    >
     
   
    
      {data.slice(1).map((li) => (
        <SwiperSlide key={li.id} style = {{cursor:"pointer"}} className="home-banner-card ">
         
  <img src={li.image} alt="poster" className="home-banner-img"/>
 

        
    
     </SwiperSlide>   
      ))}
    </Swiper>
    </div>
  );
}
export default HomeBanner;
