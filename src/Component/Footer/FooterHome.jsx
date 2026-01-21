import React from "react"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import pdf from "../../Image/contracto.pdf"
import garantia from "../../Image/garantia.pdf"
import { IoBusinessOutline } from "react-icons/io5";

const FooterHome =({PostHotelByIdHotel}) =>{

    const handleFacebook = () => {
        window.open("https://www.facebook.com/hotel47medellinstreet", "_blank");
    };

    const handleInstagram = () => {
        window.open("https://www.instagram.com/hotel47medellinstreet/", "_blank");
    };

   

    return (
      <>
      
      <div className=" bg-gray-800 relative bg-cover bg-center h-[700px] md:h-[400px] flex items-center justify-center text-white">
  <div className="relative z-10 flex flex-col md:flex-row md:justify-between items-center w-full px-5 md:px-10 lg:px-20">
    <div className="md:w-[300px] w-full">
      <h1 className="text-3xl md:text-4xl font-bold">Hotel 47 Street</h1>
      <p className="text-sm md:text-[14px] mt-4">
        Reserve ahora y disfrute de las mejores tarifas en nuestro hotel. Ofrecemos tarifas especiales para estancias prolongadas y grupos.
      </p>
      <button
        onClick={PostHotelByIdHotel}
        className="m-auto mt-8 w-full px-8 py-4 bg-gray-900 text-white transition-colors"
      >
        Reservar
      </button>
    </div>

    <div className="mt-5 md:mt-0 md:w-1/2 w-full">
      <h2 className="text-lg font-semibold">Contacto</h2>
      <div className="flex items-center mt-4">
        <span><IoBusinessOutline color="white" /></span>
        <p className="ml-2">Reservas corportativas </p>
      </div>
      <div className="flex items-center mt-4">
        <span><FaPhoneAlt color="white" /></span>
        <p className="ml-2">+57 3024821498</p>
      </div>
      <div className="flex items-center mt-2">
        <span>✉️</span>
        <p className="ml-2">reservas@medellin47.com</p>
      </div>
      <div className="flex items-center mt-2">
        <span>📍</span>
        <p className="ml-2">CLL 47 # 45 - 47 Medellín, Colombia</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <div aria-label="Facebook" className="text-white text-2xl">
          <div className="flex justify-center space-x-4">
            <FaInstagram color="white"  className="mr-2 z-50 cursor-pointer" fontSize={30} onClick={handleInstagram} />
            <FaFacebookF color="white" className="mr-2 z-50 cursor-pointer" fontSize={30} onClick={handleFacebook} />
          </div>
        </div>
      </div>
    </div>

     
    </div>
      <footer className=" m-auto max-w-7xl justify-between bottom-0 md:flex block  right-0 left-0  absolute text-center text-white py-4">
        <p>© Copyright. Todos los derechos reservados.</p>
        <a target="_blank" href={pdf} className="text-white"> Términos y Condiciones del sitio web.</a>
        <a target="_blank" href={garantia} className="text-white">Política de garantía</a>
        <a target="_blank"  className="text-white">Política de tratamiento de datos</a>
      </footer>
  </div>

    </>
    )
}
export default FooterHome