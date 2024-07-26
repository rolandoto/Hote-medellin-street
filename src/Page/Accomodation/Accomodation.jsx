import React, { useCallback, useEffect, useState } from "react";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import "./style.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Search from "../../Component/Search/Search";
import { SectionSearch} from "../../Ui/Style/GeneralStyle";
import CardAccomodation from "../../Component/CardAccomodation/CardAccomodation";
import CalenderSearch from "../../Component/CalenderSearch/CalenderSearch";
import UseHotelActions from "../../Actions/useHotelsActions";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import moment from "moment";
import LoadingSkeleton from "../../Component/LoadingSkeleton/LoadingSkeleton";
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";
import Header from "../../Component/Header/Header";
import EmpyCart from "../../Component/EmpyCart/EmpyCart";
import Cart from "../../Component/Cart/Cart";
import { IconRiCloseLargeLine } from "../../Component/Icons/Icons";
import UseCart from "../../Hooks/UseCart";
import LoadingOverlay from "../../Component/LoadingCreateReserva/LoadingOverlay";
import HeaderAccomodation from "../../Component/HeaderAccomodation/HeaderAccomodation";
import Footer from "../../Component/Footer/Footer";

const Accommodation = () => {


  useEffect(() => {
    // Scrolls to the top of the document on component mount
    window.scrollTo(0, 0);
}, []);

  const {getHotel} = UseHotelActions()
  const [contextShowMenuPeople, setContextShowMenuPeople] = useState(false);
  const {error,hotel,loading}= useSelector((state) => state.Hotel)
  const {loadingCart} = useSelector(state => state.Cart);
  const {handleSelect,state,setContextMenuPosition,contextMenuPosition,
    handChangeAdults,
    handChangeChildrem,
    handDecreaseAdults,
    handDecreaseChildren,
    totalCountAdults,
    adults,
    childrem ,
    getClassNameForDate} =  UseCalenderSearch()

    const {getCartSubtotal} = UseCart()
    const subtotal = getCartSubtotal()
    const [checkbox,setCheckBox] =useState(false)
    const formattedStartDate = moment(state[0].startDate).format('YYYY-MM-DD');
    const formattedEndDate = moment(state[0].endDate).format('YYYY-MM-DD');
    const formattedStartDateToString = moment(state[0]?.startDate).format('DD MMM YYYY').toLowerCase();
    const formattedEndDateToString = moment(state[0]?.endDate).format('DD MMM YYYY').toLowerCase();

    const PostHotelByIdHotel = useCallback(async () => {
        setContextMenuPosition(false);
        setContextShowMenuPeople(false)
        await getHotel({ id: 2, desde:formattedStartDate, hasta: formattedEndDate,counPeople:totalCountAdults });
    }, [formattedStartDate,formattedEndDate,totalCountAdults]);

    useEffect(() =>{
      PostHotelByIdHotel()
    },[])

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
    
    const handClickCart =() =>{
      setCheckBox(!checkbox)
   }

    const HandClickMenuEnd =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }

  
    const FillContent =()=>{
      if(loading){
       return  (
                <div  className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
                <LoadingSkeleton />
                </div> 
       ) 
      }if(error){
        return    <EmpyCart title={"No tenemos habitaciones disponibles para esta ocupación"} />
                }
        return <>  {hotel?.availableRooms?.map((List,index) => <CardAccomodation  key={index} {...List}/>)}</>
    }
    const monthsToShow = window.innerWidth >= 700 ? 2 : 1;

    /**
     * 
     *                  
          <div className="fixed bottom-0 left-0 right-0 flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 shadow-md rounded-t-lg">
            <div className="flex items-center mb-4 md:mb-0">
                <img
                  src="https://grupo-hoteles.com/storage/app/4/rooms/203289556-10-rooms-slider-1-habitacion_Estandar_Hotel_en_Medellin_Gallery_Hotel-01.webp"
                  alt="Room"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold">Ha seleccionado:</h2>
                  <h3 className="text-xl font-bold text-orange-500">SUITE</h3>
                  <p className="text-gray-500">Flexible WiFi, Desayuno, Cancelación Gratuita</p>
                </div>
            </div>
            <div className="text-center md:text-right mb-4 md:mb-0">
                <p className="text-2xl font-bold text-orange-500">$3,472,000</p>
                <p className="text-sm text-gray-500">$868,000 x 4 Noches</p>
                <p className="text-sm text-gray-500">$164,920 impuestos y tasas adicionales por noche</p>
            </div>
            <button className="w-full md:w-auto ml-0 md:ml-4 px-6 py-2 font-lora bg-orange-500 text-white rounded-sm ">
              IR AL CHECKOUT
            </button>
          </div>
     * 
     */

      /**
       * 
       * 
                  
       * 
       */

    return (<div >
           
            <Toaster position="bottom-right"  richColors   />
            {loadingCart && <LoadingOverlay title={"Cargando..."} />}
            <Header/>

          
            {subtotal >0 &&<Cart    
                            checkbxo={checkbox} 
                            handClickCart={handClickCart} /> } 
            <SectionSearch  >
            <HeaderAccomodation />
            <CalenderSearch  HandClickMenuPeople={HandClickMenuPeople} 
                            formattedStartDateToString={formattedStartDateToString}
                            formattedEndDateToString={formattedEndDateToString}
                            HandClickMenuEnd={HandClickMenuEnd}
                            HandClickMenu={HandClickMenu}
                            onsubmit={PostHotelByIdHotel} 
                            totalCountAdults={totalCountAdults}
                            />
          <div className="hidden lg:block  ">
              {contextMenuPosition && (
                <DateRange
                  className="flex calender-search-Acoomodation lg:hidden"
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
              <div className="  lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50  md:shadow-[17px_20px_40px_rgba(0,0,0,0.21)] md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div className="bg-white p-4  rounded-lg shadow-lg w-full h-full md:w-auto md:h-auto">
                  <button className="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextMenuPosition(false)} ><IconRiCloseLargeLine />;</button>
                 <div>
                    <h2 className="text-center text-2xl font-semibold mb-4">Selecionar fecha</h2>
                    <DateRange 
                          className="flex calender-search-Acoomodation lg:hidden"
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
                     <button
                      className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-700"
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
                      top={580}
                      adults={adults}
                      childrem={childrem}
                      handChangeAdults={handChangeAdults}
                      handDecreaseAdults={handDecreaseAdults}
                      handChangeChildrem={handChangeChildrem}
                      handDecreaseChildren={handDecreaseChildren}
                      setContextShowMenuPeople={setContextShowMenuPeople}  />}
                </div>              
                </SectionSearch>
                <div >
                    {FillContent()}
                    <Footer />
                </div>
               
            </div>
    );
}

export default Accommodation;
