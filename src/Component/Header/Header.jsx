import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header =({scrollToRoomSectionEvent}) =>{

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
            <nav className=" w-full z-40 items-center fixed p-3 bg-white shadow-md">
                    <div  className="  mx-auto flex items-center   justify-between   max-w-7xl" > 
                    <div className="text-3xl font-bold text-indigo-600">
                    <Link to="/">
                        <img 
                        className="w-[80px]" 
                        src="https://raw.githubusercontent.com/rolandoto/image-pms/refs/heads/main/Logos/47-street.png" 
                        alt="medellin street" />
                    </Link>
                    </div>

                    <div className=" hidden lg:block   space-x-4">
                        <Link to="/" className="text-black cursor-pointer text-[16px] font-normal  hover:text-black"  >Inicio</Link>
                        <Link to="/Events" className="text-black cursor-pointer text-[16px] font-normal hover:text-black"   >Próximos eventos</Link>
                        <Link to="/Accomodation" className="text-black  cursor-pointer text-[16px] font-normal hover:text-black"  >Reservas</Link>
                    </div>
                    <div className="hidden lg:block " >
                        <a 
                         target="_blank"
                         href="https://www.google.com/maps/dir//Cl.+47+%2345-47,+La+Candelaria,+Medell%C3%ADn,+La+Candelaria,+Medell%C3%ADn,+Antioquia/@6.2457143,-75.6486966,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e442856f7c6f815:0xc0a594c5b655361!2m2!1d-75.5662947!2d6.2457207?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                        className="text-white bg-black w-[150px] p-4 rounded hover:bg-black">Cómo llegar</a>
                    </div>

                    <div className="lg:hidden" >
                    <button
                        className="text-black focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                    </div>

                  
            </div>

           {menuOpen &&  <div className="lg:hidden flex flex-col mt-4 space-y-2">
                            <Link to="/" className="text-black text-[16px] font-normal  hover:text-blakc" >
                                Inicio
                            </Link>
                            <Link to="/Events" className="text-black text-[16px] font-normal  hover:text-black"  >
                                Próximos eventos
                            </Link>
                            <Link  to="/Accomodation" className="text-black text-[16px] font-normal  hover:text-blakc" >
                                Reservas
                            </Link>
                            <a  target="_blank"
                                href="https://www.google.com/maps/dir//Cl.+47+%2345-47,+La+Candelaria,+Medell%C3%ADn,+La+Candelaria,+Medell%C3%ADn,+Antioquia/@6.2457143,-75.6486966,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e442856f7c6f815:0xc0a594c5b655361!2m2!1d-75.5662947!2d6.2457207?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                                className="text-white bg-black w-full p-4 rounded hover:bg-black"   
                            >
                                Cómo llegar
                            </a>
                        </div>}
        </nav>  
    )

}

export default Header