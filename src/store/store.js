import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import ejemploSlice from "../features/ejemploSlice"


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    ejemplo: ejemploSlice,
},

});


export default store;