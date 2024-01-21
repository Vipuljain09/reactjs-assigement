import { createSlice } from "@reduxjs/toolkit";
import {dummy_data} from './dummy_data';
const gstSearchSlice = createSlice({
    name:'gstSearchSlice',
    initialState:{
        data:null,
    },
    reducers:{
        updateGstSearchData:(state,action)=>{
            const number = action.payload;
            // console.log(number,dummy_data);
            const new_data = dummy_data.find(item=>item.GSTIN===number);
            console.log(new_data);
            // state.data=action.payload;
            if(new_data)state.data = new_data;
            else state.data=[];
        }
    }
});

export const {updateGstSearchData} = gstSearchSlice.actions;
export default gstSearchSlice.reducer;