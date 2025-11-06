import Hero from "../components/Hero";
import TopDestinations from "../components/TopDestinations";
import SeasonalPlans from "../components/SeasonalPlans";
import TrendingTravel from "../components/TrendingTravel";
import StateSection from "../components/StateSection";
export default function Home() {
  return (
    <>
      <Hero />
      <StateSection/>
      <TrendingTravel/>
      <TopDestinations />
      <SeasonalPlans />
    </>
  );
}
