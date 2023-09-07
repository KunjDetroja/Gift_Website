import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Slider from "../Pages/Slider";
// import Buy from "../Pages/Buy";
import Optionbar from "./Optionbar";
import Homenav from "./Homenav";

function Home() {
  return (
    <div>
      <BrowserRouter>
        <Homenav/>

        <Optionbar/>

        <Routes>
          <Route exact path="/" element={<Slider />}></Route>
          {/* <Route exact path="/buy" element={<Buy />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;