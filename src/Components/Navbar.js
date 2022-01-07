import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
function Navbar() {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null);
  const [path, setPath] = useState("");
  // useEffect(() => {
  //   if(localStorage.getItem('token') === null) {
  //     setToken(localStorage.getItem('token'))
  //   }
  // })


  return (
    <>
      <header
        className={`navbar flex md:hidden ${show === true ? ` flex-col` : ""}`}
      >
        <div className={` ${show === true ? `hidden` : "block"} `}>
          <img className="w-14" src={Logo} alt="logo-png" />
        </div>
        <div className="block md:hidden">
          {show === true ? (
            <>
              <div
                className="absolute top-5 right-5 "
                onClick={() => {
                  setShow(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center items-center md:flex-row">
                <ul className="nav-container">
                  <Link to="/" className='nav-item'>
                    Эхлэл
                  </Link>

                  <Link to="/crypto" className='nav-item'>
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
          ) : (
            <div
              className={`border-t border-b py-1 cursor-pointer font-semibold md:hidden`}
              onClick={() => {
                setShow(!show);
              }}
            >
              Цэс
            </div>
          )}
        </div>
      </header>

      <div className="navbar hidden md:flex ">
        <div>
          <img className="w-14" src={Logo} alt="logo-png" />
        </div>
        <ul className="nav-container">
          <Link
            to="/"
            className={`${path === '/' ? "nav-active" : "nav-item"}`}
            onClick={() => {
              setPath("/");
            }}
          >
            Эхлэл
          </Link>

          <Link
            to="/crypto"
            className={`${path === 'crypto' ? "nav-active" : "nav-item"}`}
            onClick={() => {
              setPath("crypto");
            }}
          >
            Crypto
          </Link>
          <Link
            to="/nft"
            className={`${path === 'nft' ? "nav-active" : "nav-item"}`}
            onClick={() => {
              setPath("nft");
            }}
          >
            NFT
          </Link>
        </ul>

        {localStorage.getItem("token") === null ? (
          <ul className="nav-container">
            <Link to="/register" className="nav-btn-ghost">
              Бүртгүүлэх
            </Link>
            <Link to="/login" className="nav-btn">
              Нэвтрэх
            </Link>
          </ul>
        ) : (
          <ul className="nav-container">
            <Link
              to="/"
              className="nav-btn-ghost"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("email");
                window.location.reload()
              }}
            >
              Гарах
            </Link>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
