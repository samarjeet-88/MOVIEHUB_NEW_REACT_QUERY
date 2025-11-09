import TrendingSection from "./components/Home/TrendingSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-[linear-gradient(to_top_right,#b73615_0%,#2b2a2a_20%,#3a3333_30%,#1a1a1a_60%,#2b2a2a_80%)]">
        <div className="w-full h-auto border-b-2 border-white">
          <Navbar/>
        </div>
        <div className="w-full h-auto">
          <TrendingSection/>
        </div>
      </div>
    </>
  );
}

export default App;
