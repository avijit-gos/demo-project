/** @format */
import React from "react";
import { createContext, useContext } from "react";

const StateContext = createContext();

function StateContextProvider({ children }) {
  const [sortType, setSortType] = React.useState("time");
  const [pageType, setPageType] = React.useState("main");
  const [posts, setPosts] = React.useState([]);
  const [singlePost, setSinglePost] = React.useState(null);

  return (
    <StateContext.Provider
      value={{
        sortType,
        setSortType,
        pageType,
        setPageType,
        posts,
        setPosts,
        singlePost,
        setSinglePost,
      }}>
      {children}
    </StateContext.Provider>
  );
}

export const GlobalState = () => {
  return useContext(StateContext);
};

export default StateContextProvider;
