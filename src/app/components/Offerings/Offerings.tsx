import React, { useState, useEffect } from "react";
import OfferingsDesktop from "./OfferingsDesktop";
import OfferingsMobile from "./OfferingsMobile";
import CanvasLoader from "../fallback/CanvasLoader";
import Loader from "../fallback/Loader";
const Offerings = () => {
  const [windowWidth, setWindowWidth] = useState<number|null>(null);
  const isMobile = windowWidth && windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Initialize the windowWidth on component mount

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowWidth === null) {
    return <Loader/>

  }

  return (
    <div>
      {isMobile ? (
        <OfferingsMobile></OfferingsMobile>
      ) : (
        <OfferingsDesktop></OfferingsDesktop>
      )}
    </div>
  );
};

export default Offerings;

