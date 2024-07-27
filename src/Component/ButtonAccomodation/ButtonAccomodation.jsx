import { ContaineButton } from "../../Ui/Style/GeneralStyle"

const ButtonAccomodation =({price,nights,person,handleAddToCart,validPromotions,promotion})=>{
        return (
            <ContaineButton >
                <div className="p-2 " >
                    <h2 className="text-[18px] font-normal ">Noches: {nights}</h2>
                    <h2 className="text-[18px]  font-normal ">Adultos: {person}  </h2>
                    {promotion  ?   <>
                        <s> <h2 className="text-[20px] font-normal" >${parseInt(price).toLocaleString('es-CO')} cop</h2> </s>
                        <h2 className="text-[20px] font-normal" >${parseInt(validPromotions).toLocaleString('es-CO')} cop</h2> 
                    </>  :<h2 className="text-[20px] font-normal" >${parseInt(price).toLocaleString('es-CO')} cop</h2>
                  }
                    <h2  className="text-1xl font-semibold "></h2>
                </div>
                <button onClick={handleAddToCart} className="  w-full md:w-[150px]   Button-Search bg-black text-white py-4  rounded hover:bg-black transition duration-200">
                    Reservar 
                </button>
        </ContaineButton>
        )
}

export default ButtonAccomodation