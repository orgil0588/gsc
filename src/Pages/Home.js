import React from "react";
import noiseBg from "../assets/noise-bg.svg";
import heroImg from "../assets/hero-image.svg";
function Home() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-title">
          Build, Grow, Multiply And Scale{" "}
          <span className="text-yellow font-light">Your Network With</span> NFT
          Token
        </div>

        <div className="flex flex-col items-start lg:flex-row">
          <button className="cta">Whitepaper</button>
          <button className="cta-ghost">Бүртгүүлэх</button>
        </div>
        <div className="flex justify-between text-sm sm:text-base lg:justify-start">
          <div className="p-4 mt-4 text-light font-light">
            <div>Total supply</div>
            <div className="text-lg font-bold text-yellow">100M</div>
          </div>
          <div className="p-4 mt-4 text-light font-light">
            <div>Total supply</div>
            <div className="text-lg font-bold text-yellow">100M</div>
          </div>
          <div className="p-4 mt-4 text-light font-light">
            <div>Total supply</div>
            <div className="text-lg font-bold text-yellow">100M</div>
          </div>
        </div>
      
      </div>
      <div className="w-11/12 h-auto lg:w-5/12">
        <img src={heroImg} alt="hero-image" className="w-full h-full mx-auto" />
      </div>
    
    </div>
  );
}

export default Home;
