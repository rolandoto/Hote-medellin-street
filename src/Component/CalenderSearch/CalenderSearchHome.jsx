import React from "react";
import { BorderInput, BorderInputHome, BorderInputInitial, BorderInputInitialHome, ButtonSearch, ButtonSearchHome, ContainerButtonSearch, ContainerButtonSearchHome, MainAccomodation, MainProduct, MainProductHome } from "../../Ui/Style/GeneralStyle";

const CalenderSearchHome =({HandClickMenuPeople,
                        HandClickMenuEnd
                        ,HandClickMenu,
                        onsubmit,
                        formattedStartDateToString,
                        formattedEndDateToString,
                        totalCountAdults}) =>{

    return (
        <MainAccomodation className=" lg:flex   mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
                <MainProductHome className="mx-auto  	 lg:flex  items-center justify-between p-4 rounded-lg shadow-2xl ">
                                <BorderInputInitialHome className="flex flex-col hover-punter "  onClick={HandClickMenu}>
                                        <span className="mb-2 font-medium" >Llegada :</span>
                                        <span>  {formattedStartDateToString === 'fecha inválida' ? '-- / -- / --' : formattedStartDateToString}</span>
                                </BorderInputInitialHome>
                                <BorderInputHome className="flex flex-col  hover-punter" onClick={HandClickMenuEnd}>
                                        <span className="mb-2 font-medium">Salida:</span>
                                        <span>{formattedEndDateToString === 'fecha inválida' ? '-- / -- / --' : formattedEndDateToString}</span>
                                </BorderInputHome>

                                <BorderInputHome className="flex flex-col hover-punter" onClick={HandClickMenuPeople}  >
                                    <span className="mb-2 font-medium">Personas:</span>
                                    <span>{totalCountAdults} </span>
                                </BorderInputHome>
                                <ContainerButtonSearchHome className="  ">
                                <ButtonSearchHome className=" lg:hidden  block  w-full bg-[black] text-white py-4    rounded hover:bg-[black] transition duration-200" onClick={onsubmit}>
                                            Verificar disponibilidad
                                    </ButtonSearchHome>
                                    <ButtonSearchHome className=" hidden  lg:block w-[150px]   bg-[black] text-white py-4    rounded hover:bg-[black]transition duration-200" onClick={onsubmit}>
                                            Verificar disponibilidad
                                    </ButtonSearchHome>
                                </ContainerButtonSearchHome>
                </MainProductHome>
            </MainAccomodation>    
    )
}

export default CalenderSearchHome