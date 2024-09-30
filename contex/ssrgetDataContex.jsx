"use client";
import { createContext } from "react";

export const ssrgetDataContex = createContext();
export const ssrgetDataProvider = ({ children }) => {
  async function getServerSideProps() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1/");
    const posts = response.data;

    return {
      props: {
        posts,
      },
    };
  }

  return (
    <ssrgetData.Provider value={getServerSideProps}>
      <div>{children}</div>
    </ssrgetData.Provider>
  );
};
