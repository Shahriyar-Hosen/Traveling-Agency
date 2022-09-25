import { apiSlice } from "../api/apiSlice";

export const hotelsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHotels: builder.query({
      /*  filter by

      => countByCity?cities=Dhaka,Sofia,Antalya
      => featured=true
      => limit=4
      => countByType

      --> /hotels?city=${destination}&min=${min || 0 }&max=${max || 999}
      --> /hotels/find/${id}
      --> /hotels/room/${hotelId}

      */
      query: () => `/hotels`,
    }),
    getHotel: builder.query({
      query: (id) => `/hotels/find/${id}`,
    }),

    addHotel: builder.mutation({
      query: ({ sender, data }) => ({
        url: "/hotels",
        method: "POST",
        body: data,
      }),
    }),
    editHotel: builder.mutation({
      query: ({ id, data, sender }) => ({
        url: `/hotels/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetHotelQuery,
  useAddHotelMutation,
  useEditHotelMutation,
} = hotelsApi;
