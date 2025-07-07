import HomeBanner from "../components/HomeBanner";
import { homeBannerData } from "../utils/mockdata";
import { top50Data } from "../utils/mockdata";
import HomeCards from "../components/HomeCards";

function Home() {
  return (
    <div className="bg-navbar p-4" style={{ minHeight: "100dvh" }}>
      <HomeBanner data = {homeBannerData} />
      <HomeCards data = {top50Data}/>
    </div>
  );
}

export default Home;
