import { createSlice } from "@reduxjs/toolkit";

 export const ejemploSlice = createSlice({
    /*primero le decimos el estado inicial*/
    name: "ejemploSlice",
    initialState: {
        value: 1,
    },/*aca puede ir cualquier cosa, array, objeto, string, num, etc*/

    /*ahora con el reducer le decimos que es lo que va a poder hacer*/
    reducers:{
        increment: (state) => {
            state.value += 1
          },
    }
})


/*esto se exporta y se importa en store.js*/
export default ejemploSlice.reducer
export const { increment } = ejemploSlice.actions
