import HomeBanner from "../components/HomeBanner";
import { top50Data,homeBannerData, top90Data } from "../utils/mockdata";
import Container from "react-bootstrap/esm/Container";
import HomeCards from "../components/HomeCards";

function Home() {
  return (
    <div className="bg-navbar p-4" style={{ minHeight: "100dvh" }}>
    <Container>
      <HomeBanner data = {homeBannerData} />
      <HomeCards data = {top50Data}/>
       <HomeCards data = {top90Data}/>
</Container>
    </div>
  );
}

export default Home;
