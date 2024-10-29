import React from "react"
import {  IconFaFacebookF, IconFaInstagram, IconFaMapMarkerAlt, IconFaWhatsapp, IconFaYoutube, IconsMdEmail } from "../Icons/Icons"

const Footer =() =>{

    const handleFacebook = () => {
        window.open("https://www.facebook.com/galleryhotelmedellin", "_blank");
    };

    const handleInstagram = () => {
        window.open("https://www.instagram.com/galleryhotelmed/", "_blank");
    };

    /**
     * 
     * <div className="w-[350px] lg:w-[280px] lg:w-122 " >
                            <div className="flex justify-center space-x-4 mt-4">
                                <IconFaInstagram   onclick={handleInstagram} />
                                <IconFaFacebookF  onclick={handleFacebook} />
                            </div>
                    </div>
     * 
     */

    return (
        <div
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://grupo-hoteles.com/storage/app/2/page/1205002298-2-page-slider-1-habitacion-deluxe-centro-de-medellin-antioquia-colombia.webp')",
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:justify-between items-center w-full px-5 md:px-10 lg:px-20">
        <div className="md:w-[300px]">
          <h1 className="text-3xl md:text-4xl font-bold">Hotel 47 Street</h1>
          <p className="text-sm md:text-[14px] mt-4">
            Reserve ahora y disfrute de las mejores tarifas en nuestro hotel. Ofrecemos tarifas especiales para estancias prolongadas y grupos.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-white text-2xl">
              <div className="flex justify-center space-x-4">
                <IconFaInstagram onClick={handleInstagram} />
                <IconFaFacebookF onClick={handleFacebook} />
              </div>
            </a>
            <a href="#" aria-label="Instagram" className="text-white text-2xl">
              {/* Insert Instagram Icon */}
            </a>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:w-1/2">
          <h2 className="text-lg font-semibold">CONTACTO</h2>
          <div className="flex items-center mt-4">
            <span>📞</span>
            <p className="ml-2">+57 310 365 16 61</p>
          </div>
          <div className="flex items-center mt-2">
            <span>✉️</span>
            <p className="ml-2">reservas@medellin47.com</p>
          </div>
          <div className="flex items-center mt-2">
            <span>📍</span>
            <p className="ml-2">CLL 47 # 45 - 47 Medellín, Colombia</p>
          </div>
        </div>

        <div className="absolute bottom-0 right-5 w-40 h-[100px] md:w-60 md:h-60">
          <div className="map-container" style={{ width: "100%", height: "100%" }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.971964172734!2d-75.6486966!3d6.2457143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442856f7c6f815%3A0xc0a594c5b655361!2sCl.%2047%20%2345-47%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1698617462304!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Footer