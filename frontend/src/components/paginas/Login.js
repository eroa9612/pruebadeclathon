import React, { useState } from "react";
import { Link } from "react-router-dom";
import services from "../../services/servicesNode";
import Swal from "sweetalert2";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    let response = await services.login(email, password);
    if (response.status === 200) {
      window.localStorage.setItem("token", response.data.tokenReturn);
      props.history.push("/productos");
    }
    Swal.fire({
      title: response.data.title,
      text: response.data.msg,
      icon: response.data.status,
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <form
        className="w-1/2 py-4 bg-white rounded flex justify-center items-center flex-col shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-gray-600 mb-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="mb-5 p-3 w-1/2 focus:border-purple-700 rounded border-2 outline-none"
          autoComplete="off"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="mb-5 p-3 w-1/2 focus:border-purple-700 rounded border-2 outline-none"
          autoComplete="off"
          placeholder="Password"
          required
        />
        <button
          className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-1/2"
          id="login"
          type="submit"
          onClick={() => login()}
        >
          <span>Login</span>
        </button>
        <p className="mt-4 text-sm">
          aún no estás registrado?
          <Link to="/register">
            <span className="underline cursor-pointer ml-2"> Registrarse</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
