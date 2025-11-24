import React from 'react';
import logo from "../../Image/47-street.png";
import google from "../../Image/google.png"
import travisor from "../../Image/trivasor.png"

const QrCode = () => {

    return (
        <div className="min-h-screen bg-[#F3F3F3] flex flex-col items-center px-4">
        <div className="w-full flex justify-between items-start px-6 py-6">
        <img 
          src={logo} 
          alt="47 Medellín Street"
          className="w-24 sm:w-28"
        />
                <button className="bg-black text-white px-5 py-2 rounded-md shadow hover:opacity-80 transition">
                    Reserva Ahora
                </button>
                </div>
                        <div className="text-center max-w-3xl mt-4">
                            <h1 className="text-3xl sm:text-4xl font-semibold text-black">
                            Gracias por hospedarte en [NOMBRE DEL HOTEL]
                            </h1>

                            <p className="mt-4 text-gray-600 font-medium">
                            Tu experiencia nos guía para hacerlo cada día mejor.
                            </p>

                            <p className="text-gray-500 text-sm italic mt-1">
                            Thank you for staying at [HOTEL NAME]. Your experience guides us to keep getting better every day.
                            </p>
                </div>
      <div className="relative mt-10">
        <img 
          src="/tarjeta-regalo.png" 
          alt="tarjeta"
          className="w-64 sm:w-72 rotate-[-6deg]"
        />
      </div>
            <div className="flex flex-col sm:flex-row gap-8 mt-10">
                    <a 
                    href="#" 
                    target="_blank"
                    className="bg-white shadow-md p-8 rounded-2xl w-[227px] h-[246px] flex flex-col items-center justify-between hover:shadow-lg transition">
                        <img 
                        src={google} 
                        alt="Google"
                        className="w-[125px] h-[125px]"
                    />

                    <div className="flex flex-col items-center">
                            <p className="text-gray-600 font-plus-jakarta text-center">
                                Déjanos tu opinión en
                            </p>

                            <p className="font-plus-jakarta text-gray-500 font-bold text-2xl leading-6 text-center mt-1">
                                Google
                            </p>
                    </div>
                    </a>
                    <a 
                        href="#"
                        target="_blank"
                        className="bg-white shadow-md p-8 rounded-2xl w-[227px] h-[246px] flex flex-col items-center justify-between hover:shadow-lg transition">
                        <div className="flex justify-center items-center w-full h-[125px]">
                            <img 
                            src={travisor} 
                            alt="Tripadvisor"
                            className=""
                            />
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-gray-600 font-plus-jakarta text-center">
                            Déjanos tu opinión en
                            </p>

                            <p className="font-plus-jakarta text-gray-500 font-bold text-2xl leading-6 text-center mt-1">
                            Tripadvisor
                            </p>
                        </div>
                    </a>
            </div>

        <div className="text-center mt-12">
            <p className="text-gray-600 font-medium">
            Gracias por permitirnos ser parte de tu viaje.
            </p>
            <p className="text-black font-semibold text-sm mt-1">
            Thank you for allowing us to be part of your journey.
            </p>
        </div>
        <div className="flex gap-4 mt-8">
            <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:shadow-md">
                <i className="fa-brands fa-facebook-f text-gray-700"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:shadow-md">
                <i className="fa-brands fa-instagram text-gray-700"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:shadow-md">
                <i className="fa-brands fa-twitter text-gray-700"></i>
            </button>
        </div>
        <footer className="text-center text-gray-600 text-xs mt-20 pb-10 w-full border-t pt-4 border-gray-300">
            <div className="flex justify-center mb-3">
            <img src="/10elementos.png" alt="10 Elementos" className="w-10" />
            </div>
            © 2025 Grupo 10 Elementos Hotels — Todos los derechos reservados <br />
            Cartagena | Medellín | Bogotá

            <a href="#" className="block mt-2 underline">
            Términos y condiciones
            </a>
        </footer>
        </div>
    );

}

export default QrCode;