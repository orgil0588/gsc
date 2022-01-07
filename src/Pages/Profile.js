import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Profile() {
  return (
    <div className="h-screen text-center mt-20">
      <div>
        {localStorage.getItem("token") === null ? <Redirect to="/" /> : ""}
        <div className="font-light ">
          Таны бүртгэлтэй имейл:{" "}
          <span className="font-semibold">{localStorage.getItem("email")}</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Profile;
