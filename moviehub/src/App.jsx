import Home from "./components/Home/Home";
import TrendingSection from "./components/Home/TrendingSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-[linear-gradient(to_top_right,#b73615_0%,#2b2a2a_20%,#3a3333_30%,#1a1a1a_60%,#2b2a2a_80%)]">
        <div className="w-full h-auto border-b-2 border-white">
          <Navbar/>
        </div>
        <div className="w-[90%] m-auto " >
          <Home/>
        </div>
      </div>
    </>
  );
}

export default App;
