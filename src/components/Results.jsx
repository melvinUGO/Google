import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { results, isLoading, getResult, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResult(`${location.pathname}?query=${searchTerm}&num=10`);
  }, [searchTerm, location.pathname, getResult]);

  if (isLoading) {
    return <Loading />;
  }

  console.log(results);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.items?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
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
    case "/imagesearch":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.items?.map(
            (
              { originalImageUrl, thumbnailImageUrl, contextLink, title },
              index
            ) => {
              return (
                <a
                  href={contextLink}
                  className="sm:p-3 p-5"
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={thumbnailImageUrl} alt={title} loading="lazy" />
                  <p className="w-36 break-words text-sm mt-2">{title}</p>
                </a>
              );
            }
          )}
        </div>
      );
      break;
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.items?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
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
    case "/videos":
      return "videos";
      break;

    default:
      return "error";
      break;
  }
};

export default Results;
