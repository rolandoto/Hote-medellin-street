import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { useSelector } from "react-redux";
import UseEventsActions from "../../Actions/useEventsActions";
import WhatsappButton from "../../Component/WhatsappButton/WhatsappButton";
import Usetitle from "../../Hooks/Usetitle";

const DetailEvents =() =>{

    useEffect(() => {
        // Scrolls to the top of the document on component mount
        window.scrollTo(0, 0);
    }, []);

    let { userId } = useParams();

    const {geteventsDetail,loadinggetEventsDetail,errorgetEventsDetail}= useSelector(state => state.Events);
    const {getEventsDetail} =UseEventsActions()    
  
      const fetchDate =async() =>{
          await getEventsDetail({id:userId})
      }
  
      useEffect(() =>{
          fetchDate()
      },[])
      
    Usetitle({title:geteventsDetail.Name})


   const FillContent =() =>{
    if(loadinggetEventsDetail){
        return <p>...cargando</p>
    }if(errorgetEventsDetail){
        return  <div className="mx-auto max-w-4xl text-center p-6 mb-24" >
        <span className="text-2xl text-center font-mono text-black mb-4" >Evento no disponible </span>
            </div>
    }

    return <>
    <div className="mx-auto max-w-4xl p-6 mb-24">
            <h1 className="text-[30px] text-center text-black font-lora  mb-6">{geteventsDetail.Name}</h1>
                <div className=" w-full p-4">
                    <img
                            src={geteventsDetail.img_events}
                            alt="Room"
                            className="w-full h-[500px] object-center rounded-lg shadow-lg" />
                </div>
                <span className="text-2xl font-lora text-black mb-4" >{geteventsDetail.Place}: </span>
                <div className=" md:pl-6 mt-12 md:mt-6">
                    <div  className="mt-4" dangerouslySetInnerHTML={{__html: geteventsDetail.Description}} >
                    </div>
                </div>
        </div>
    </>
    }
    return (<>
               <Header/>
               <div className="relative bg-cover bg-center h-[410px]" style={{ backgroundImage: `url(https://grupo-hoteles.com/storage/app/2/page/1205002298-2-page-slider-1-habitacion-deluxe-centro-de-medellin-antioquia-colombia.webp)`,}}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-lora">
                           Eventos
                        </h1>
                    </div>
                </div>
                <WhatsappButton />
                {FillContent()}
              <Footer/>
            </>)

}

export default  DetailEvents