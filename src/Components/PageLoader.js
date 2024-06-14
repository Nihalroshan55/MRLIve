import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from './Preloader'; // Ensure this path is correct

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    setIsLoading(true); // Set loading to true whenever the location changes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger effect on location pathname change

  return (
    <>
      {isLoading ? <Preloader /> : children}
    </>
  );
};

export default PageLoader;
