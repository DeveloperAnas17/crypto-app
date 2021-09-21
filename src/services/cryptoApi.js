import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "658299f461mshfe98fb67665e73ap1c8452jsn163855a075c2",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/exchanges";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// var options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/exchanges",
//   headers: {
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//     "x-rapidapi-key": "658299f461mshfe98fb67665e73ap1c8452jsn163855a075c2",
//   },
// };
