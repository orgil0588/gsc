// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import registerImg from "../assets/register.png";
// import { Redirect } from "react-router-dom";
// import axios from "axios"

// function Login() {
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);
//   const [error, setError] = useState(false);
//   const [token, setToken] = useState(null);
//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios
//       .post(`${process.env.REACT_APP_REST_API}/login`, {
//         email: email,
//         password: password,
//       })
//       .then((res) => {
//         setToken(res.data.token);
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("email", res.data.user.email);
//         window.location.reload()
//       })
//       .catch((err) => {
//         setError(err.response.data.error.message);
//       });
//   };
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  p-10 w-10/12 mx-auto bg-darkGray rounded-2xl ">
//       {token && <Redirect to="/profile" />}
//       <div className="hidden lg:block lg:relative">
//         <img
//           src={registerImg}
//           alt="register-image"
//           className="relative h-full"
//         />
//         <div className="absolute top-10">
//           <div className="ml-10 font-bold text-yellow text-lg mb-10">-MINT-</div>
//           <div className="ml-10">
//             <div className="font-semibold text-lg w-10/12 mx-auto text-center ">
//               “ PAPER MONEY IS GOING AWAY “
//             </div>
//             <div className="text-center mt-10">Elon Musk</div>
//           </div>
//         </div>
//         <div className="absolute bottom-10 left-10">
//           <div className="font-light ">
//             Танд өмнө бүртгүүлээгүй бол энд дарж бүртгүүлнэ үү
//           </div>
//           <Link to="register">
//             <div className="font-bold text-light my-4">Бүртгүүлэх</div>
//           </Link>
//         </div>
//       </div>
//       <div>
//         <div className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-yellow mt-4">
//           Тавтай морил MINT
//         </div>
//         <div className="text-lg md:text-xl 2xl:text-2xl text-lightGray my-4">
//           Нэвтрэх
//         </div>
//         <form className="w-full">
//           {error && (
//             <div className="p-4 rounded-xl font-semibold bg-red bg-opacity-20 text-red">
//               {error}
//             </div>
//           )}
//           <label className="flex flex-col mt-6 mb-2 text-lightGray text-sm">
//             Email хаяг
//           </label>
//           <input
//             placeholder="Email хаягаа оруулна уу"
//             className="p-3 rounded-xl bg-darkGray border border-gray w-full placeholder:text-gray placeholder:text-sm "
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           <label className="flex flex-col mt-6 mb-2 text-lightGray text-sm">
//             Нууц үг
//           </label>
//           <input
//             placeholder="Нууц үгээ оруулна уу"
//             type="password"
//             className="p-3 rounded-xl bg-darkGray border border-gray w-full placeholder:text-gray placeholder:text-sm "
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />

//           <button
//             className="p-3 my-8 bg-yellow w-full text-dark rounded-xl font-semibold"
//             onClick={(e) => handleLogin(e)}
//           >
//             Нэвтрэх
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
