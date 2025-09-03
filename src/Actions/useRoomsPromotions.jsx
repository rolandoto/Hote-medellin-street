import { useAppDispatch } from "../Hooks/Redux"
import HttpClient from "../HttpClient"
import {toast} from "sonner"
import {setRoomsPromtions,
        setErrorRoomsPromtions,
        loadingRoomsPromtions,
        
        loadingGetRoomsPromtions,
        setErrorGetRoomsPromtions,
        setRoomsGetPromtions,
        loadingRoomsEmail,
        setErrorRoomEmail,
        setRoomEmail
        } from "../reducers/ApiRoomsPromotion"

const useRoomsPromotions =() =>{
   
    const dispatch =  useAppDispatch()

    const PostRoomsPromotions =async({days}) =>{
        dispatch(loadingRoomsPromtions())
        try {
            const response  = await HttpClient.PostRoomPromotions({days})
            if(response){
                dispatch(setRoomsPromtions(response)) 
             
            }else{
                dispatch(setErrorRoomsPromtions("no found")) 
               
            }
        } catch (error) {
            dispatch(setErrorRoomsPromtions("no found")) 
           
        }
    }

    const GetRoomsPromotions =async({id}) =>{
        dispatch(loadingGetRoomsPromtions())
        try {
            const response  = await HttpClient.GetRoomsPromtions({id})
            if(response){
                dispatch(setRoomsGetPromtions(response)) 
               
            }else{
                dispatch(setErrorGetRoomsPromtions("no found")) 
               
            }
        } catch (error) {
            dispatch(setErrorGetRoomsPromtions("no found")) 
            
        }
    }


    const PostRoomEmail =async({propertyID,Email,Username}) =>{
        dispatch(loadingRoomsEmail())
     
            try {
                    const response  = await HttpClient.sendPromotionalEmail({propertyID,Email,Username})
                    
                    if(response.ok){
                        dispatch(setRoomEmail(response)) 
                        toast.success("TE SUSCRIBIRSTE CORRECTAMENTE")
                    }else{
                        dispatch(setErrorRoomEmail("no found")) 
                            toast.error(response.msg)
                    }
                    } catch (error) {
                        
                        dispatch(setErrorRoomEmail("no found")) 
                        toast.error("Error en el sistema")
            }

    }

    return {
        PostRoomsPromotions,
        GetRoomsPromotions,
        PostRoomEmail
    }

}

export default useRoomsPromotions