import {useState} from "react";

const useAsideSetters = () => {
  const [alpOrder,setAlpOrder] = useState("---");
  const [ratingOrder,setRatingOrder] = useState("---");
  const [genreInput,setGenreInput] = useState("All");
  const [originInput,setOriginInput] = useState("All")

  const resetAsideState = () => {
    setAlpOrder("---");
    setRatingOrder("---");
    setGenreInput("---");
    setOriginInput("All")
  };

  return {
    alpOrder,setAlpOrder,
    ratingOrder,setRatingOrder,
    genreInput,setGenreInput,
    originInput,setOriginInput,
    resetAsideState
  }
};

export default useAsideSetters;