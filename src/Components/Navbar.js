import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header
        className={`navbar flex md:hidden ${show === true ? ` flex-col` : ""}`}
      >
        <div
          className={`py-2 px-4 bg-yellow ${
            show === true ? `hidden` : "block"
          } `}
        ></div>
        <div className="block md:hidden">
          {show === true ? (
            <>
              <div
                className="absolute top-5 right-5 text-2xl px-2 bg-yellow "
                onClick={() => {
                  setShow(false);
                }}
              >
                x
              </div>
              <div className="flex flex-col justify-center items-center md:flex-row">
                <ul className="nav-container">
                  <Link to="/" className="nav-active">
                    Эхлэл
                  </Link>

                  <Link to="/crypto" className="nav-item">
                    Crypto
                  </Link>
                  <Link to="/nft" className="nav-item">
                    NFT
                  </Link>
                </ul>
                <ul className="nav-container">
                  <Link to="/register" className="nav-btn-ghost">
                    Бүртгүүлэх
                  </Link>
                  <Link to="/register" className="nav-btn">
                    Нэвтрэх
                  </Link>
                </ul>
              </div>
            </>
          ) : (
            <div
              className={`md:hidden`}
              onClick={() => {
                setShow(!show);
              }}
            >
              Menu
            </div>
          )}
        </div>
      </header>

      <div className="navbar hidden md:flex ">
        <div className={`py-2 px-4 bg-yellow`}></div>
        <ul className="nav-container">
          <Link to="/" className="nav-active">
            Эхлэл
          </Link>

          <Link to="/crypto" className="nav-item">
            Crypto
          </Link>
          <Link to="/nft" className="nav-item">
            NFT
          </Link>
        </ul>
        <ul className="nav-container">
          <Link to="/register" className="nav-btn-ghost">
            Бүртгүүлэх
          </Link>
          <Link to="/login" className="nav-btn">
            Нэвтрэх
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
