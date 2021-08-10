import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import services from "../../services/servicesNode";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const send = async () => {
    let response = await services.registerUser(name, email, password);
    Swal.fire({
      title: response.title,
      text: response.msg,
      icon: response.status,
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="min-h-screen bg-purple-400 flex justify-center items-center">
      <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Crear Cuenta
          </h1>
          <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
            Bienvenido
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="text"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <div className="text-center mt-4">
          <button
            className="py-2 w-64 text-xl text-white bg-purple-400 rounded-2xl"
            type="submit"
            onClick={() => send()}
          >
            Crear Cuenta
          </button>
          <p className="mt-4 text-sm">
            Ya estás registrado?
            <Link to="/login">
              <span className="underline cursor-pointer"> Iniciar Sesión</span>{" "}
            </Link>
          </p>
        </div>
      </div>
      <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  );
};

export default RegisterUser;
