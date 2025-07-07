import "../styles/homeCards.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
function HomeCards({data}) {

  return (
    <div className = "mt-5">
<h4>{data[0].title}</h4>
    
     <Swiper
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     
   
    
      {data.slice(1).map((li, index) => (
        <>
        <SwiperSlide key={index} style = {{cursor:"pointer"}} className="home-card-container">
         
  <img src={li.image} alt="poster" className="home-card-img"/>
 

        
    
     </SwiperSlide>   
     <p>{li.description}</p>
     </>
      ))}
    </Swiper>
    </div>
  );
}
export default HomeCards;
