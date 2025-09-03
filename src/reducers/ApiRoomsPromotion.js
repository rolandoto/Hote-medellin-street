import {createSlice} from "@reduxjs/toolkit"

export const initialState ={
    RoomsPromotions:true,
    loadingRoomsProtions:false,
    errorRoomsProtions:null,

    RoomsGetPromotions:[],
    loadingGetRoomsProtions:false,
    errorGetRoomsProtions:null,

    RoomEmail:[],
    loadingRooEmail:false,
    errorRoomEmail:false
}
export const ApiRoomsPromotionReducers = createSlice({
    name:"RoomPromotion",
    initialState,
    reducers:{
        loadingRoomsPromtions:(state) =>{
            state.loadingRoomsProtions=true
            state.errorRoomsProtions= null
        },
        setErrorRoomsPromtions:(state) =>{
            state.loadingRoomsProtions = true
            state.errorRoomsProtions = false
        },
        setRoomsPromtions:(state,action) =>{
            state.RoomsPromotions =true
            state.loadingGetRoomsProtions= false
        },


        loadingGetRoomsPromtions:(state) =>{
            state.loadingGetRoomsProtions=true
            state.errorGetRoomsProtions= null
        },
        setErrorGetRoomsPromtions:(state) =>{
            state.loadingGetRoomsProtions = true
            state.errorGetRoomsProtions = false
        },
        setRoomsGetPromtions:(state,action) =>{
            state.RoomsGetPromotions =action.payload
            state.loadingGetRoomsProtions= false
        },


        loadingRoomsEmail:(state) =>{
            state.loadingRooEmail=true
            state.errorRoomEmail= null
        },
        setErrorRoomEmail:(state) =>{
            state.loadingRooEmail = true
            state.errorRoomEmail = false
        },
        setRoomEmail:(state,action) =>{
            state.RoomEmail =action.payload
            state.loadingRooEmail= false
        },
    }
})

export const {  loadingRoomsPromtions,
                setErrorRoomsPromtions,
                setRoomsPromtions,

                loadingGetRoomsPromtions,
                setErrorGetRoomsPromtions,
                setRoomsGetPromtions,

                loadingRoomsEmail,
                setErrorRoomEmail,
                setRoomEmail
                
            } = ApiRoomsPromotionReducers.actions

export default  ApiRoomsPromotionReducers.reducer