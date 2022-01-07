import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-image.svg";
import DownloadLink from "../Components/Pdf";
import Mint from "../assets/pdf.pdf";
import Pbc from "../assets/PBC Whitepaper.pdf"

function Home(props) {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-title">
          Mint ашиглан{" "}
          <span className="text-yellow font-light"> сүлжээгээ бүтээж</span>{" "}
          өсгөж, үржүүлж, өргөжүүлээрэй
        </div>

        <div className="flex flex-col items-center lg:flex-row">
          {" "}
          <div className="cta">
            <DownloadLink src={Mint}>
              <div>Whitepaper</div>
            </DownloadLink>
          </div>
          <Link className="cta-ghost" to="register">
            {" "}
            <button className="">Бүртгүүлэх</button>
          </Link>
        </div>
        <div className="flex justify-between mx-auto text-center text-sm sm:text-base lg:justify-start lg:mx-0 lg:text-left">
          <div className="p-4 mt-4 text-light font-light">
            <div className="flex">
              Mint Coin{" "}
              <DownloadLink src={Mint}>
                <div className="ml-4 text-yellow">Whitepaper</div>
              </DownloadLink>
            </div>
            <div className="text-lg font-bold text-yellow">
              1 MiNT = 1 ₮
            </div>
            <div className="flex mt-4">
              Polygon Bitcoin{" "}
              <DownloadLink src={Pbc}>
                <div className="ml-4 text-yellow">Whitepaper</div>
              </DownloadLink>
            </div>
            <div className="text-lg font-bold text-yellow">
             1 PBC = 1 BTC
            </div>
         
          </div>
        </div>
      </div>
      <div className="w-8/12 h-auto lg:w-5/12">
        <img src={heroImg} alt="hero-image" className="w-full h-full mx-auto" />
      </div>
    </div>
  );
}

export default Home;
