import React, { Fragment }  from "react";
import { ImginProduct, MainAccomodationRoom, MainProduct } from "../../Ui/Style/GeneralStyle";
import ButtonAccomodation from "../ButtonAccomodation/ButtonAccomodation";
import DescripctionAccomodation from "../DescripctionAccomodation/DescripctionAccomodation";
import TitleDinner from "../TitleDinner/TitleDinner";
import useCartActions from "../../Actions/useCartActions";
import { useSelector } from "react-redux";
import {toast} from "sonner"

const CardAccomodation =({  roomTypeName,
    maxGuests,
    roomRate,
    roomTypePhotos,
    cantidad,
    promotion
    ,counPeople,
    endDate,
    startDate,
    roomsAvailable,
    roomTypeID,
    nightsToday}) =>{


const {cart} = useSelector(state => state.Cart);

const originalPrice = roomRate; // Precio original
const discountRate = 0.19; // 19% de descuento
const discountedPrice = originalPrice * (1 - discountRate);

const validPromotions =promotion ? discountedPrice :  roomRate

const {AddCart } =useCartActions()

const handleAddToCart = () => {
    const existingRoom = cart.find(item => item.roomTypeID === roomTypeID);
    if (existingRoom) {
        if(existingRoom.quantity +1 > roomsAvailable){
            toast.error("no hay habitaciones")
        }else{
            AddCart({ roomTypeID, roomTypeName,quantity: 1,Price:roomRate,roomsAvailable,startDate,endDate,room_image:roomTypePhotos[0].image,nights:nightsToday,person:counPeople,persontotal:counPeople}); 
        }
    }else{
        AddCart({ roomTypeID, roomTypeName,quantity: 1,Price:roomRate,roomsAvailable,startDate,endDate,room_image:roomTypePhotos[0].image,nights:nightsToday,person:counPeople,persontotal:counPeople}); 
    }
};

return (   
<MainAccomodationRoom className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8"   >     
<MainProduct className="lg:flex block bg-white shadow-md"    >
<Fragment>
    <TitleDinner />
 
    <ImginProduct   className="w-auto" src={roomTypePhotos[0].image}  alt="Hotel Image"/>

</Fragment>
<DescripctionAccomodation max_people={maxGuests} promotion={promotion} cantidad={cantidad}   title={roomTypeName}  />
<ButtonAccomodation 
        validPromotions={validPromotions}
        max_people={maxGuests}
        totalCountAdults={counPeople}
        promotion={promotion}
        handleAddToCart={handleAddToCart}
        price={roomRate} 
        nights={nightsToday}
        person={counPeople}  />
</MainProduct> 
</MainAccomodationRoom>)
}

export default CardAccomodation