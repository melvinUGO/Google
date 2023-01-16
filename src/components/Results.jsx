import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { results, isLoading, getResult, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/NewsSearchAPI") {
      getResult(
        `/search${location.pathname}?q=${searchTerm}&pageSize=15&autoCorrect=true`
      );
    } else {
      getResult(
        `/Search${location.pathname}?q=${searchTerm}&pageSize=15&autoCorrect=true`
      );
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  console.log(results);

  switch (location.pathname) {
    case "/WebSearchAPI":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.value?.map(({ url, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
      break;
    case "/ImageSearchAPI":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.value?.map(({ thumbnail, webpageUrl, title }, index) => {
            return (
              <a
                href={webpageUrl}
                className="sm:p-3 p-5"
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img src={thumbnail} alt={title} loading="lazy" />
                <p className="w-36 break-words text-sm mt-2">{title}</p>
              </a>
            );
          })}
        </div>
      );
      break;
    case "/NewsSearchAPI":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.value?.map(({ url, id, provider, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg  dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <div className="flex gap-4">
                  <p>{provider?.name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      );
      break;
    case "/videos":
      return "videos";
      break;

    default:
      return "error";
      break;
  }
};

export default Results;
