import { useState, useEffect } from "react";

// This hook allows you to use CSS media queries in your React components.
// This hook can be used to make a React component responsive to changes in the window size or other media features.

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches); // It defines a listener function that updates matches with the value of media.matches whenever the window is resized.
    window.addEventListener("resize", listener); // It adds this listener function as an event listener for the "resize" event on the window object.

    return () => window.removeEventListener("resize", listener); // When the component using this hook unmounts, or when matches or query changes, it removes the listener from the "resize" event.
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;