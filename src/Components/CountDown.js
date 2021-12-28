import React from "react";
import noiseBg from "../assets/noise-bg.svg"

function CountDown() {
  return (
    <div>
      <div className="absolute top-1/2 -translate-y-1/2 w-6/12">
        <img className="" src={noiseBg} alt="noise-bg" />

        <div className="">
          <div className="card left-5">
            <div className="card-top">14</div>
            <div className="card-bottom">Өдөр</div>
          </div>
          <div className="card left-1/2 -translate-x-1/2 ">
            <div className="card-top">20</div>
            <div className="card-bottom">Өдөр</div>
          </div>
          <div className="card right-5">
            <div className="card-top">30</div>
            <div className="card-bottom">Өдөр</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
