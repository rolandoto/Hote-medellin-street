import React, { useCallback, useEffect, useRef, useState } from "react"
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import Search from "../../Component/Search/Search";
import {useNavigate } from "react-router-dom";
import Header from "../../Component/Header/Header";
import CalenderSearchHome from "../../Component/CalenderSearch/CalenderSearchHome";
import TitleWelcome from "../../Component/TitleWelcome/TitleWelcome";
import Features from "../../Component/Features/Features";
import Footer from "../../Component/Footer/Footer";
import AccordionAsk from "../../Component/AccordionAsk/AccordionAsk";
import Events from "../../Component/Events/Events";
import RoomDetail from "../../Component/RoomDetail/RoomDetail";
import RoomPresentaion from "../../Component/RoomPresentation/RoomPresentation";
import "./home.css"
import { IconRiCloseLargeLine, IconsFaBanSmoking, IconsFaConciergeBell, IconsFaGlassMartini, IconsFaSquareParking, IconsFaStore, IconsGiForkKnifeSpoon, IconsRiBankFill, IconsaCar } from "../../Component/Icons/Icons";
import 'react-date-range/dist/styles.css'; // import the default styles
import 'react-date-range/dist/theme/default.css'; // import the default theme
import moment from 'moment';
import 'moment/locale/es';
import UseCart from "../../Hooks/UseCart";
import Cart from "../../Component/Cart/Cart";
import UseHotelActions from "../../Actions/useHotelsActions";
import { useSelector } from "react-redux";
import WhatsappButton from "../../Component/WhatsappButton/WhatsappButton";

const Home =() =>{
  const navigate = useNavigate();
  moment.locale('es');
  
  useEffect(() => {
    // Scrolls to the top of the document on component mount
    window.scrollTo(0, 0);
}, []);

  const {getCartSubtotal} = UseCart()
  const {hotelList,loadingHotel,errorHotel}= useSelector((state) => state.Hotel)
  const {getListHotel} =UseHotelActions()

  const fetchDate =async() =>{
    await getListHotel()
  }

  useEffect(() =>{
    fetchDate()
  },[])

  const FillContent =()=>{
    if(errorHotel){
      return   <h1>Error en el servicio</h1>
              }
  }

  const FindIdHotel=(hotel) =>{
		return hotel.id_hotel ==2
	}
	
	const hotel = hotelList.find(FindIdHotel)


const subtotal = getCartSubtotal()

  const reviews = [

    {
      id: 1,
      name: "Robinson Vasquez",
      date: "hace un mes",
      rating: 4,
      text: "Un ambiente tranquilo, buena ubicación!",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/Robinson(3).png?raw=true", // Add the path to the avatar image if available
    },
    {
      id: 2,
      name: "Bárbara Pérez",
      date: "hace un mes",
      rating: 5,
      text: "",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/Cielo.png?raw=true", // Add the path to the avatar image if available
    },
    {
      id: 3,
      name: "Esleidy Largo",
      date: "",
      rating: 5,
      text: "",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/Esleidy(3).png?raw=true", // Add the path to the avatar image if available
    },
   
    {
      id: 4,
      name: "IMPORT JHEYSSI SAS",
      date: "hace 5 meses",
      rating: 5,
      text: "Un poquito lejos del centro, sobre la iluminación es perfecta para descansar y la ubicación estratégica para encender las luces por zonas me parece muy bueno para el precio! Más amabilidad es lo único que podría pedir, con esto no digo que son groseros, mejor dicho son intermedio! 👍",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/importadora(2).png?raw=true",
    },
    {
      id: 5,
      name: "Angie gil",
      date: "hace un mes",
      rating: 5,
      text: "Es un lugar muy agradable, con un restaurante encantador, buena atención al cliente, las habitaciones aseadas y ordenadas; el único defecto es que las habitaciones no cuentan con agua caliente y no hay TV por cable, pero por lo demás todo está súper bien.      ",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/angie(2).png?raw=true",
    }
  ];
  
  const features = [
      { icon: <IconsFaGlassMartini/>, title: 'Cóctel de bienvenida' },
      { icon: <IconsGiForkKnifeSpoon/>, title: 'Desayuno incluido' },
      { icon: <IconsFaConciergeBell/>, title: 'Recepción 24 horas' },
      { icon: <IconsaCar/>, title: 'Variedad de transporte', description: 'Metro, tranvía, autobús, taxi' },
      { icon: <IconsRiBankFill/>, title: 'Vida cultural y nocturna', description: 'Bares, museos, restaurantes' },
      { icon: <IconsFaSquareParking/>, title: 'Parqueadero gratis*', description: 'Sujeto a disponibilidad' },
      { icon: <IconsGiForkKnifeSpoon/>, title: 'Restaurante - Bar  ', description: ' con vista panorámica' },
      { icon: <IconsFaStore/>, title: 'Alianzas comerciales', description: 'Servicio de taxi, gimnasio, tours, médico, comunicaciones.' },
      { icon: <IconsFaBanSmoking/>, title: 'Espacios libre de humo', description: "" },
    ];

      const roomSectionRef = useRef(null);
      const roomEventsSectionRef = useRef(null);

      const scrollToRoomSection = () => {
        if (roomSectionRef.current) {
            roomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
  

    const scrollToRoomSectionEvent = () => {
      if (roomEventsSectionRef.current) {
          roomEventsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

      const [contextShowMenuPeople, setContextShowMenuPeople] = useState(false);
      const {handleSelect,state,
            setContextMenuPosition,
            contextMenuPosition,
            handChangeAdults,
            handChangeChildrem,
            handDecreaseAdults,
            handDecreaseChildren,
            totalCountAdults,
            adults,
            childrem ,
            getClassNameForDate } =  UseCalenderSearch()
        
      
    const formattedStartDateToString = moment(state?.[0]?.startDate ?? '').format('DD MMM YYYY').toLowerCase();

    const formattedEndDateToString = moment(state?.[0]?.endDate ?? '').format('DD MMM YYYY').toLowerCase();
    

    const PostHotelByIdHotel = useCallback(async () => {
      setContextMenuPosition(false);
      navigate("/Accomodation");
    }, []);


    const HandClickMenuPeople =() =>{
      if(contextShowMenuPeople){
        setContextShowMenuPeople(false)
      }else if(!contextShowMenuPeople){
        setContextShowMenuPeople(true)
      }
      setContextMenuPosition(false)
    }
  
    const HandClickMenu =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }
       
  
    const HandClickMenuEnd =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }             

    const faqs = [
      {
        question: '¿Cuáles son los sitios turísticos de la ciudad y si están cerca al hotel?',
        answer: (
          <ul className="list-disc list-inside">
            <li>Teatros (3 a 9 min caminando)</li>
            <li>Museo de Antioquia</li>
            <li>Plaza Botero</li>
            <li>Jardín Botánico de Medellín</li>
            <li>Parque Lleras</li>
            <li>Comuna 13</li>
          </ul>
        ),
      },
      {
        question: '¿Cómo es la seguridad del sector? ¿se puede salir en la noche?',
        answer: 'La seguridad del sector es buena, pero siempre se recomienda tomar precauciones normales como en cualquier ciudad. Es seguro salir en la noche, especialmente en áreas concurridas y turísticas.',
      },
      {
        question: '¿Cuáles son los mejores centros comerciales de la ciudad de Medellín?',
        answer: (
          <ul className="list-disc list-inside">
            <li>Centro Comercial Santa Fe</li>
            <li>Centro Comercial El Tesoro</li>
            <li>Centro Comercial Oviedo</li>
            <li>Centro Comercial Premium Plaza</li>
          </ul>
        ),
      },
      {
        question: '¿Dónde puedo cambiar divisas?',
        answer: 'Puede cambiar divisas en casas de cambio ubicadas en centros comerciales, en el aeropuerto, y en diversas partes del centro de la ciudad.',
      },
    ];



    const rooms = [
      {title: 'Room Deluxe', price:350000 , image:"https://grupo-hoteles.com/storage/app/2/rooms/149724843-6-rooms-slider-1-Habitacion-Delux-Hotel-en-Medellin-Street-47-Hotel-c1-01.webp", 
          features: ['Cama grande', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV',"jacuzzi"] },
      {title: 'Room Clásica Ventilador',price:119000, image: "https://grupo-hoteles.com/storage/app/2/rooms/1703605246-1-rooms-slider-1-habitacion-Clasica-hoteles-en-Medellin-02-01.webp", 
        features: ['Camarote', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Ventilador'] },
      {title: 'Room Estandar Aire',price:129000, image: "https://grupo-hoteles.com/storage/app/2/rooms/1860922523-2-rooms-slider-2-habitacion-bussines-hoteles-en-Medellin-Slider-1.webp", 
        features: ['Camarote', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Aire Acondicionado']},
       {title: 'Room Jacuzzi',price:170000, image: "https://grupo-hoteles.com/storage/app/2/rooms/489465130-4-rooms-slider-2-Habitacion-Jacuzzi-Hotel-en-Medellin-Street-Slider-2.webp", 
       features: ['Camarote', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Aire Acondicionado']},
      {title: 'Room Familiar',price:210000, image: "https://grupo-hoteles.com/storage/app/2/rooms/1587970644-3-rooms-slider-1-Habitacion-Grupal-Hotel-en-Medellin-Street-47-Hotel-01.webp", 
       features: ['Camarote', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Aire Acondicionado']},
      {title: 'Room VIP',price:280000, image: "https://grupo-hoteles.com/storage/app/2/rooms/1579559628-5-rooms-slider-1-Habitacion-VIP-Hotel-en-Medellin-Street-47-Hotel-c1-01.webp", 
       features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Aire Acondicionado']
      },
    ];

    const monthsToShow = window.innerWidth >= 700 ? 2 : 1; // Cambia 768 según tu punto de ruptura deseado

/**
 * 
 *    <div className="max-w-7xl mx-auto py-8">
              <h2 className="text-[30px] text-center text-orange-500  font-lora  mb-6">Lo que opinan nuestros clientes</h2>
              <div className="block md:flex" >
                    <div className="flex items-center justify-center ">
                      <div className="max-w-sm p-6">
                        <div className="flex items-center">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://github.com/rolandoto/image-pms/blob/main/2020-06-27.jpg?raw=true"
                            alt="Hotel"
                          />
                          <div className="ml-4">
                            <h2 className="text-lg font-semibold">Gallery Hotel Medellín</h2>
                            <div className="flex items-center">
                              <span className="text-orange-500 text-lg font-bold">4.0</span>
                              <div className="flex ml-1">
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">Basado en 600 reseñas.</p>
                            <p className="text-sm text-gray-500 mt-2">powered by <span className="text-gray-700 font-semibold">Google</span></p>
                          </div>
                        </div>
                        <a target="_blank" href="https://www.google.com/search?hl=en-CO&gl=co&q=Gallery+Hotel+Medell%C3%ADn,+Cl.+47+%2341-55,+La+Candelaria,+Medell%C3%ADn,+La+Candelaria,+Medell%C3%ADn,+Antioquia&ludocid=13557792269951917256&lsig=AB86z5Xi3QsXtAp5vxVbKW_n47sq#lrd=0x8e4428575a0dc0d1:0xbc26f43cbd055cc8,3" className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center">

                          valóranos en <span className="ml-1 font-semibold"><svg viewBox="0 0 512 512" height="18" width="18"><g fill="none" fill-rule="evenodd"><path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path><path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path><path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path><path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path><path d="M20 20h472v472H20V20z"></path></g></svg></span>
                        </a>
                      </div>
                            </div>
              <div className="flex overflow-x-scroll space-x-4">
                {reviews.map((review) => (
                  <div key={review.id} className="min-w-[250px] max-w-[250px] p-4 bg-white shadow rounded-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((star, index) => (
                        
                        <svg className={`w-5 h-5  ${index < review.rating ?" text-orange-500" :"text-gray-300"} `} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                      </svg>
                       
                      ))}
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>


            </div>
          </div>
 * 
 */
    return (
        <div>
          {FillContent}
           <Header  scrollToRoomSectionEvent={scrollToRoomSectionEvent}   />
              <div className="relative bg-cover bg-center h-[650px]" style={{ 
                    backgroundImage: `url(https://grupo-hoteles.com/storage/app/2/page/1205002298-2-page-slider-1-habitacion-deluxe-centro-de-medellin-antioquia-colombia.webp)`,}}>
                <div className="absolute inset-0 bg-black opacity-15"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-lora">
                      {loadingHotel ?"cargando " :hotel?.nombre}  
                    </h1>
                    <p className="mt-2 text-base md:text-xl lg:text-3xl font-lora font-normal">
                        Más que un hotel, una experiencia artística
                    </p>
                    <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-black" onClick={scrollToRoomSection}>
                        Ver habitaciones
                    </button>
                </div>
            </div>

            <CalenderSearchHome HandClickMenuPeople={HandClickMenuPeople} 
                                 formattedStartDateToString={formattedStartDateToString}
                                 formattedEndDateToString={formattedEndDateToString}
                                  HandClickMenuEnd={HandClickMenuEnd}
                                  HandClickMenu={HandClickMenu}
                                  onsubmit={PostHotelByIdHotel}
                                  totalCountAdults={totalCountAdults}/>

          <div className="hidden lg:block  ">
              {contextMenuPosition && (
                <DateRange
                  className="flex  calender-search-home lg:hidden"
                  rangeColors={["rgb(255 104 0 / 36%);"]}
                  minDate={new Date()}
                  onChange={handleSelect}
                  editableDateInputs={true}
                  months={2}
                  dayContentRenderer={(date) => {
                    const className = getClassNameForDate(date);
                  
                    return (
                      <div className={className}>
                        {date.getDate()}
                      </div>
                    );
                  }}
                  autoFocus
                  moveRangeOnFirstSelection={false} // No mueve el rango en la primera selección
                  showSelectionPreview={false} // Muestra la selección previa
                  startDatePlaceholder="Early"
                  showDateDisplay={true}
                  ranges={state}
                  direction="horizontal"
                  locale={esLocale}
                />
              )}
            </div>
          {contextMenuPosition &&
              <div class="  lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50  md:shadow-[17px_20px_40px_rgba(0,0,0,0.21)] md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div class="bg-white p-4  rounded-lg shadow-lg w-full h-full md:w-auto md:h-auto">
                  <button class="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextMenuPosition(false)} ><IconRiCloseLargeLine /></button>
                 <div>
                    <h2 class="text-center text-2xl font-semibold mb-4">Selecionar fecha</h2>
                    <DateRange 
                          className="flex calender-search-home lg:hidden"
                          rangeColors={["rgb(255 104 0 / 36%);"]}
                          minDate={new Date()}
                          onChange={handleSelect}
                          editableDateInputs={true}
                          months={monthsToShow}
                          dayContentRenderer={(date) => {
                            const className = getClassNameForDate(date);
                          
                            return (
                              <div className={className}>
                                {date.getDate()}
                              </div>
                            );
                          }}
                          autoFocus
                          moveRangeOnFirstSelection={false} // No mueve el rango en la primera selección
                          showSelectionPreview={false} // Muestra la selección previa
                          startDatePlaceholder="Early"
                          showDateDisplay={true}
                          ranges={state}
                          direction="horizontal"
                          locale={esLocale}
                      />
                     
                    </div>
                    <button
                      className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-black"
                      onClick={(e) => setContextMenuPosition(false) }
                      style={{
                        position: 'absolute',
                        bottom: '20px',  // Ajusta esta propiedad según la distancia que desees del borde inferior
                        left: '50%',     // Centra el botón horizontalmente
                        transform: 'translateX(-50%)', // Ajusta la posición centrada
                      }}
                    >
                      Continuar
                    </button>
                 </div> 
            </div>} 
            {contextShowMenuPeople &&
              <div className=" lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50   md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div className="bg-white p-4   rounded-lg  w-full h-full md:w-auto md:h-auto">
                  <button className="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextShowMenuPeople(false)} ><IconRiCloseLargeLine /></button>
                        <div>
                              <h2 className="text-center text-2xl font-semibold mb-4">Selecionar adultos</h2>
                              <Search contextShowMenuPeople={contextShowMenuPeople}
                              top={715}
                              adults={adults}
                              childrem={childrem}
                              handChangeAdults={handChangeAdults}
                              handDecreaseAdults={handDecreaseAdults}
                              handChangeChildrem={handChangeChildrem}
                              handDecreaseChildren={handDecreaseChildren}
                              setContextShowMenuPeople={setContextShowMenuPeople}  />
                      </div>
                  </div> 
              </div>} 
              <div className="hidden lg:block  ">
                {contextShowMenuPeople && 
                  <Search contextShowMenuPeople={contextShowMenuPeople}
                  top={715}
                  adults={adults}
                  childrem={childrem}
                  handChangeAdults={handChangeAdults}
                  handDecreaseAdults={handDecreaseAdults}
                  handChangeChildrem={handChangeChildrem}
                  handDecreaseChildren={handDecreaseChildren}
                  setContextShowMenuPeople={setContextShowMenuPeople}  />}
              </div>
             
          <TitleWelcome />
          <Features features={features} />
          <RoomPresentaion />
          <div ref={roomSectionRef} >   
            <RoomDetail ref={roomSectionRef}  rooms={rooms} />
          </div>
       

          <div ref={roomEventsSectionRef} >
            <Events  />
          </div>

          {subtotal >0 &&<Cart    
                          /> } 
          <WhatsappButton />
          <AccordionAsk faqs={faqs} />
          <Footer />
    
          </div>
    )
    
}

export default Home