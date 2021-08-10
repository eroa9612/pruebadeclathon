import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import services from "../../services/servicesNode";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    let data = await services.getProductos();
    setProductos(data);
  };
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className=" bg-gray-100 mt-10 grid grid-cols-3 gap-4">
      {productos.map((item) => (
        <div
          className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          key={item._id}
        >
          <img className="rounded-xl" src={item.img} alt="" />
          <div className="flex justify-between items-center mx-4">
            <div>
              <h1 className="mt-5 text-2xl font-semibold"> {item.name} </h1>
              <p className="mt-2">Precio: ${item.precio} </p>
            </div>
            <div>
              <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productos;
