
//bannerImports
import rahimanPoster from "../assets/banner_posters/ar-rahiman-poster.jpg"
import zakirPoster from "../assets/banner_posters/zakir-hussain-poster.jpg"
import thamanPoster from "../assets/banner_posters/thaman_poster.jpg"
import lataPoster from "../assets/banner_posters/Lata_mangeshkar_poster.jpg"
import dspPoster from "../assets/banner_posters/dsp_poster.jpg"
import anirudhPoster from "../assets/banner_posters/anirudh_poster.jpg"

//top_50 imports
import telugu50 from "../assets/top_50/telugu_top_50.jpg"
import hindi50 from "../assets/top_50/hindi_top_50.jpg"
import tamil50 from "../assets/top_50/tamil_top_50.jpg"
import kannada50 from "../assets/top_50/kannada_top_50.jpg"
import malayalam50 from "../assets/top_50/malayalam_top_50.jpg"
import bhojpuri50 from "../assets/top_50/bhojpuri_top_50.jpg"
import bengali50 from "../assets/top_50/bengali_top_50.jpg"

//top_90 imports

import telugu90 from "../assets/top_90/tollywood_90s.jpg"
import kannada90 from "../assets/top_90/kannada_90s.jpg"
import malayalam90 from "../assets/top_90/malayalam_90s.jpg"
import tamil90 from "../assets/top_90/tamil_90s.jpg"
import hindi90 from "../assets/top_90/bollywood_90s.jpg"
import bhojpur90 from "../assets/top_90/bhojpuri_90s.jpg"
import bengali90 from "../assets/top_90/bengali_90s.jpg"




export const homeBannerData = [
{ 
  title: "Top Artists", 
  description: "Most Played", 
  detailInfo: "Featuring the most streamed and loved Indian artists." 
},
    {id : "home-banner1" , image : rahimanPoster },
    {id : "home-banner2" , image : anirudhPoster },
    {id : "home-banner3" , image : thamanPoster },
    {id : "home-banner4" , image : dspPoster },
    {id : "home-banner6" , image : zakirPoster },
     {id : "home-banner5" , image : lataPoster }

]

 
export const top50Data = [
  { 
    title: "Top Charts", 
    description: "Most Played", 
    width: "200px", 
    height: "300px", 
    detailInfo: "Enjoy the most streamed songs across languages." 
  },

  { 
    id: "top50Data-1", 
    image: telugu50, 
    description: "Top 50 Telugu", 
    detailInfo: "Trending Tollywood tracks lighting up the charts.",
    category: "teluguTop",
    language: "Telugu"
  },
  { 
    id: "top50Data-2", 
    image: hindi50, 
    description: "Top 50 Hindi", 
    detailInfo: "Bollywood's hottest hits in one place.",
    category: "hindiTop",
    language: "Hindi"
  },
  { 
    id: "top50Data-3", 
    image: tamil50, 
    description: "Top 50 Tamil", 
    detailInfo: "Top Kollywood songs ruling playlists.",
    category: "tamilTop",
    language: "Tamil"
  },
  { 
    id: "top50Data-4", 
    image: kannada50, 
    description: "Top 50 Kannada", 
    detailInfo: "Vibrant Kannada beats making waves.",
    category: "kannadaTop",
    language: "Kannada"
  },
  { 
    id: "top50Data-5", 
    image: malayalam50, 
    description: "Top 50 Malayalam", 
    detailInfo: "Fresh and evergreen Malayalam hits.",
    category: "malayalamTop",
    language: "Malayalam"
  },
  { 
    id: "top50Data-6", 
    image: bhojpuri50, 
    description: "Top 50 Bhojpuri", 
    detailInfo: "High-energy Bhojpuri songs you’ll love.",
    category: "bhojpuriTop",
    language: "Bhojpuri"
  },
  { 
    id: "top50Data-7", 
    image: bengali50, 
    description: "Top 50 Bengali", 
    detailInfo: "Top Bengali tunes you can’t miss.",
    category: "bengaliTop",
    language: "Bengali"
  }
];




export const top90Data = [
  { 
    title: "90s Hit's", 
    description: "Retro Vibes", 
    width: "200px", 
    height: "300px", 
    detailInfo: "Take a nostalgic ride with 90s musical gems." 
  },
  { 
    id: "top90Data-1", 
    image: telugu90, 
    description: "Telugu 90s", 
    detailInfo: "Classic Telugu melodies that defined a decade." 
  },
  { 
    id: "top90Data-2", 
    image: hindi90, 
    description: "Hindi 90s", 
    detailInfo: "Golden age of Bollywood music from the 90s." 
  },
  { 
    id: "top90Data-3", 
    image: tamil90, 
    description: "Tamil 90s", 
    detailInfo: "Relive iconic 90s Tamil hits and memories." 
  },
  { 
    id: "top90Data-4", 
    image: kannada90, 
    description: "Kannada 90s", 
    detailInfo: "Beloved Kannada songs from the golden era." 
  },
  { 
    id: "top90Data-5", 
    image: malayalam90, 
    description: "Malayalam 90s", 
    detailInfo: "Timeless Malayalam tunes from the 90s." 
  },
  { 
    id: "top90Data-6", 
    image: bhojpur90, 
    description: "Bhojpuri 90s", 
    detailInfo: "Classic Bhojpuri songs that never fade." 
  },
  { 
    id: "top90Data-7", 
    image: bengali90, 
    description: "Bengali 90s", 
    detailInfo: "Musical treasures from 90s Bengal." 
  }
];





