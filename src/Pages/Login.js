import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import registerImg from "../assets/register.png";
function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.response.data.error.message);
        console.log(err.response);
      });
  };
  return (
    <div className="grid grid-cols-2 gap-10  p-10 w-10/12 mx-auto bg-darkGray rounded-2xl ">
      <div className="relative">
        <img src={registerImg} alt="register-image" className="relative" />
        <div className="absolute top-10">
          <div className="ml-10 font-bold text-yellow text-lg mb-10">-GSC-</div>
          <div className="ml-10">
            <div className="font-semibold text-lg w-10/12 mx-auto text-center ">
              “ PAPER MONEY IS GOING AWAY “
            </div>
            <div className="text-center mt-10">Elon Musk</div>
          </div>
        </div>
        <div className="absolute bottom-10 left-10">
          <div className="font-light ">
            Танд өмнө бүртгүүлээгүй бол энд дарж бүртгүүлнэ үү
          </div>
          <Link to="register">
            <div className="font-bold text-light my-4">Бүртгүүлэх</div>
          </Link>
        </div>
      </div>
      <div>
        <div className="text-5xl font-bold text-yellow mt-4">
          Тавтай морил GSC
        </div>
        <div className="text-2xl text-lightGray my-4">Нэвтрэх</div>
        <form className="w-full">
          {error && (
            <div className="p-4 rounded-xl font-semibold bg-red bg-opacity-20 text-red">{error}</div>
          )}
          <label className="flex flex-col mt-6 mb-2 text-lightGray text-sm">
            Email хаяг
          </label>
          <input
            placeholder="Email хаягаа оруулна уу"
            className="p-3 rounded-xl bg-darkGray border border-gray w-full placeholder:text-gray placeholder:text-sm "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="flex flex-col mt-6 mb-2 text-lightGray text-sm">
            Нууц үг
          </label>
          <input
            placeholder="Нууц үгээ оруулна уу"
            className="p-3 rounded-xl bg-darkGray border border-gray w-full placeholder:text-gray placeholder:text-sm "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            className="p-3 my-8 bg-yellow w-full text-dark rounded-xl font-semibold"
            onClick={(e) => handleLogin(e)}
          >
            Нэвтрэх
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
