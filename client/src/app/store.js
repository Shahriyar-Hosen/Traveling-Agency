import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import destinationReducer from "../features/destination/destinationSlice";
import hotelsReducer from "../features/hotels/hotelsSlice";
import toursReducer from "../features/tours/toursSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    hotels: hotelsReducer,
    tours: toursReducer,
    destination: destinationReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
