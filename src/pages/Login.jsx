import { Link } from "react-router-dom";
import { useState } from "react";
import loginImg from "../assets/img/login.avif";

function Login() {
  const [activeButton, setActiveButton] = useState("accedi");

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div id="login" className="text-neutral-800 bg-neutral-100 ">
      <div className="h-screen flex justify-center items-center">
        {/* img */}
        <div className="w-1/2 h-full hidden lg:block">
          <img
            src={loginImg}
            alt="login-img"
            className=" w-full h-full object-cover object-bottom block"
          />
        </div>

        {/* Forms */}
        <div className="flex flex-col gap-5 justify-center items-center w-1/2">
          {/* Logo */}
          <Link to="/">
            {" "}
            <img
              src="/white-logo.png"
              alt="Dark Logo"
              className="img-fluid block "
              width={130}
              height={130}
            />
          </Link>

          {/* switch */}
          <div className="flex gap-4 bg-neutral-200 rounded-3xl p-1 ">
            <button
              className={`border rounded-3xl px-5 py-2 ${
                activeButton === "accedi" ? "bg-neutral-100" : "bg-transparent"
              }`}
              onClick={() => handleClick("accedi")}
            >
              Accedi
            </button>
            <button
              className={`border rounded-3xl px-5 py-2 ${
                activeButton === "registrati"
                  ? "bg-neutral-100"
                  : "bg-transparent"
              }`}
              onClick={() => handleClick("registrati")}
            >
              Registrati
            </button>
          </div>

          {/* Login */}
          <form
            action="#"
            method="post"
            className={`flex flex-col gap-5 ${
              activeButton === "accedi" ? "" : "hidden"
            }`}
          >
            {/* Email */}
            <div className="flex-col flex">
              <label htmlFor="login-email">Inserisci Email</label>
              <input
                type="text"
                name="email"
                id="login-email"
                className="p-1 border bg-neutral-50   hover:border-emerald-600 rounded-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
              />
            </div>

            {/* Password */}
            <div className="flex-col flex">
              {" "}
              <label htmlFor="login-password">Inserisci Password</label>
              <input
                type="password"
                name="password"
                id="login-password"
                className="p-1 border bg-neutral-50   hover:border-emerald-600 rounded-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
              />
            </div>

            <button className="text-xs underline">Password Dimenticata?</button>

            <button className="bg-neutral-800 rounded-3xl text-neutral-100 py-1">
              Accedi
            </button>
          </form>

          {/* Register */}
          <form
            action="#"
            method="post"
            className={`flex flex-col gap-5 ${
              activeButton === "registrati" ? "" : "hidden"
            }`}
          >
            {/* Nome */}
            <div className="flex-col flex">
              <label htmlFor="register-name">Inserisci Nome</label>
              <input
                type="text"
                name="name"
                id="register-name"
                className="p-1 border bg-neutral-50   hover:border-emerald-600 rounded-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
              />
            </div>

            {/* Cognome */}
            <div className="flex-col flex">
              <label htmlFor="register-surname">Inserisci Cognome</label>
              <input
                type="text"
                name="surname"
                id="register-surname"
                className="p-1 border bg-neutral-50   hover:border-emerald-600 rounded-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
              />
            </div>

            {/* Email */}
            <div className="flex-col flex">
              <label htmlFor="register-email">Inserisci Email</label>
              <input
                type="text"
                name="email"
                id="register-email"
                className="p-1 border bg-neutral-50   hover:border-emerald-600 rounded-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
              />
            </div>

            {/* Password */}
            <div className="flex-col flex">
              {" "}
              <label htmlFor="register-password">Inserisci Password</label>
              <input
                type="password"
                name="password"
                id="register-password"
                className="p-1 border bg-neutral-50   hover:border-emerald-600 rounded-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
              />
            </div>

            <button className="bg-neutral-800 rounded-3xl text-neutral-100 py-1">
              Registrati
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
