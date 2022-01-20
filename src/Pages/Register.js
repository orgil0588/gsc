// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import registerImg from "../assets/register.png";
// import axios from "axios";
// function Register() {
//   const [email, setEmail] = useState(null);
//   const [number, setNumber] = useState(null);
//   const [password, setPassword] = useState(null);
//   const [verifyPassword, setVerifyPassword] = useState(null);
//   const [error, setError] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (password.length < 8) {
//       setError("Нууц үг хамгийн багадаа 8 тэмдэгт байна");
//     } else if (password !== verifyPassword) {
//       setError("Нууц үг алдаатай байна");
//     } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
//       setError("Email буруу байна");
//     } else if (number.length !== 8) {
//       setError("Утасны дугаар буруу байна");
//     } else {
//       axios
//         .post(`${process.env.REACT_APP_REST_API}/register`, {
//           email: email,
//           number: number,
//           password: password,
//         })
//         .then((res) => {
//           setSuccess(true);
//         })
//         .catch((err) => {
//           setError(err.response.data.error.message);
//         });
//     }
//   };

//   return (
//     //
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  p-10 w-10/12 mx-auto bg-darkGray rounded-2xl ">
//       <div className="hidden lg:block lg:relative">
//         <img
//           src={registerImg}
//           alt="register-image"
//           className="relative h-full"
//         />
//         <div className="absolute top-10">
//           <div className="ml-10 font-bold text-yellow text-lg mb-10">
//             -MINT-
//           </div>
//           <div className="ml-10">
//             <div className="font-semibold text-lg w-10/12 mx-auto text-center ">
//               “ BITCOIN IS A TECHNOLOGICAL TOUR DE FORCE “
//             </div>
//             <div className="text-center mt-10">Bill Gates</div>
//           </div>
//         </div>
//         <div className="absolute bottom-10 left-10">
//           <div className="font-light">
//             Та өмнө бүртгүүлсэн бол нэвтэрч орно уу
//           </div>
//           <Link to="login">
//             <div className="font-bold text-light my-4">Нэвтрэх</div>
//           </Link>
//         </div>
//       </div>
//       <div>
//         <div className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-yellow mt-4">
//           Тавтай морил MINT
//         </div>
//         <div className="text-lg md:text-xl 2xl:text-2xl text-lightGray my-4">
//           Бүртгүүлэх
//         </div>
//         <form className="w-full">
//           {error && !success && (
//             <div className="p-4 rounded-xl font-semibold bg-red bg-opacity-20 text-red">
//               {error}
//             </div>
//           )}
//           {success && (
//             <div className="p-4 rounded-xl  font-semibold text-green bg-green bg-opacity-20">
//               Таны бүртгэл амжилттай та нэвтэрч орно уу
//             </div>
//           )}
//           <label className="flex flex-col mt-6 mb-2 text-lightGray text-sm">
//             Email хаяг
//           </label>
//           <i class="fas fa-envelope"></i>
//           <input
//             type="email"
//             placeholder="Email хаягаа оруулна уу"
//             className="p-3 rounded-xl bg-darkGray border border-gray w-full placeholder:text-gray placeholder:text-sm "
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           <label className="flex flex-col mt-6 mb-2 text-lightGray text-sm">
//             Утасны дугаар
//           </label>
//           <input
//             type="text"
//             placeholder="Утасны дугаараа оруулна уу"
//             className="p-3 rounded-xl bg-darkGray border border-gray w-full placeholder:text-gray placeholder:text-sm "
//             onChange={(e) => {
//               setNumber(e.target.value);
//             }}
//           />
//           <label className="flex flex-col mt-6 mb-2 text-lightGray text-sm">
//             Нууц үг
//           </label>
//           <input
//             type="password"
//             placeholder="Нууц үгээ оруулна уу"
//             className="p-3 rounded-xl bg-darkGray border border-gray w-full placeholder:text-gray placeholder:text-sm "
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//           <label className="flex flex-col mt-6 mb-2 text-lightGray text-sm">
//             Нууц үгээ баталгаажуулах
//           </label>
//           <input
//             type="password"
//             placeholder="Нууц үгээ давтаж оруулна уу"
//             className="p-3 rounded-xl bg-darkGray border border-gray w-full placeholder:text-gray placeholder:text-sm "
//             onChange={(e) => {
//               setVerifyPassword(e.target.value);
//             }}
//           />

//           <button
//             className="p-3 bg-yellow w-full text-dark rounded-xl font-semibold mt-4"
//             onClick={(e) => handleRegister(e)}
//           >
//             Бүртгүүлэх
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
