import React from "react";
import Logo from "../assets/logo.png";
function Footer() {
  return (
    <div className="w-full bg-darkGray mt-20 flex py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
      <div className="w-3/12">
        <img className="w-10 h-auto" src={Logo} alt="logo-png" />
      </div>
      <div className="w-9/12 text-sm">
        <div className="font-semibold text-base">Холбоо барих</div>

        <div className="flex my-2">
          <div className="mr-4 ">
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
                strokeWidth={1}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          Утас: +976 94126383
        </div>
        <div className="flex my-2">
          <div className="w-6 h-6  mr-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          Хаяг: СБДүүрэг, Их Эзэн Чингис хааны талбай гудамж 8/1, Сити Тауэр
          1001 тоот
        </div>
      </div>
    </div>
  );
}

export default Footer;
