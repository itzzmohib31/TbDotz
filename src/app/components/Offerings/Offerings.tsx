import React, { useState, useEffect } from "react";
import OfferingsDesktop from "./OfferingsDesktop";
import OfferingsMobile from "./OfferingsMobile";

const Offerings = () => {
  const [variant, setVariant] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setVariant(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div key={variant}>
      {variant && variant <= 768 ? <OfferingsMobile /> : <OfferingsDesktop />}
    </div>
  );
};

export default Offerings;
