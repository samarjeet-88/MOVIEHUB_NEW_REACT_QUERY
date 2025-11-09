import React from "react";
import TrendingSection from "./TrendingSection";
import UpcomingSection from "./UpcomingSection";

function Home() {
  return (
    <>
      <div className="w-full">
        <TrendingSection />
        <UpcomingSection />
      </div>
    </>
  );
}

export default Home;
