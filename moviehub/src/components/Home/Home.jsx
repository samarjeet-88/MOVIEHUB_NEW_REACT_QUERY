import React from "react";
import TrendingSection from "./TrendingSection";
import UpcomingSection from "./UpcomingSection";

function Home() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <TrendingSection />
        <UpcomingSection />
      </div>
    </>
  );
}

export default Home;
