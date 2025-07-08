import HomeBanner from "../components/HomeBanner";
import { top50Data,homeBannerData, top90Data } from "../utils/mockdata";

import HomeCards from "../components/HomeCards";

function Home() {
  return (
    <div className="bg-navbar p-4" style={{ minHeight: "100dvh" }}>
      <HomeBanner data = {homeBannerData} />
      <HomeCards data = {top50Data}/>
       <HomeCards data = {top90Data}/>

    </div>
  );
}

export default Home;
