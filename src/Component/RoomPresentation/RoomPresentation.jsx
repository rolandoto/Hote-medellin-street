import React from "react";
import { useNavigate } from "react-router-dom";

const RoomPresentaion =() =>{
    const navigate = useNavigate();

    const HandNext = () =>{
        navigate("/Accomodation");
    }

    return (  <div className="bg-[#bfbbbb99] py-12 px-4">
                <div className="container mx-auto max-w-7xl   flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4 text-">
                    <h2 className="text-3xl font-normal text-center  text-black-700 text-[30px] font-lora ">Reserva tu habitación hoy mismo</h2>
                    <p className="text-gray-700 text-justify mt-8 mb-4">
                    Nuestras habitaciones están diseñadas para ofrecer comodidad y estilo, a la vez que te sumergen en la vibrante escena artística de Medellín. Cada habitación está decorada con obras de artistas locales, creando un ambiente único e inspirador.
                    </p>
                    <p className="text-gray-700 text-justify mb-4">
                    Gallery Hotel está ubicado en el corazón del centro de Medellín, a solo unos pasos de las principales atracciones turísticas, restaurantes y bares. La ubicación perfecta para explorar la ciudad y descubrir todo lo que tiene para ofrecer.
                    </p>
                    <button onClick={HandNext}  className="text-white bg-black mt-4  w-[200px] p-3 rounded hover:bg-black"><span className=" text-[20px]" >Reservar</span></button>
                </div>
                <div className="md:w-1/2 p-4">
                <img 
                    src="https://grupo-hoteles.com/storage/app/2/rooms/17374244-2-rooms-slider-1-habitacion-bussines-hoteles-en-Medellin-c4-01.webp" 
                    alt="Reservation" 
                    width="600" 
                    height="400" 
                    className="w-full rounded-lg shadow-lg" 
                />
                </div>
                </div>
            </div>)
  

}

export default RoomPresentaion