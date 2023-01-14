import React, { useContext, createContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("pie");

  const getResult = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    });
    const data = await response.json();
    setResults(data);
    setIsLoading(false);
    console.log(data);
  };
  return (
    <ResultContext.Provider
      value={{ getResult, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => {
  return useContext(ResultContext);
};
