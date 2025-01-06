"use client";

import { useEffect, useRef } from "react";

const GoogleMapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (typeof window.google === "undefined") {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        script.onload = initializeMap;
        document.body.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (mapRef.current) {
        const center = { lat: 6.5244, lng: 3.3792 }; // Replace with your coordinates
        const map = new google.maps.Map(mapRef.current, {
          center,
          zoom: 15, // Adjust the zoom level
        });

        new google.maps.Marker({
          position: center,
          map,
        });
      }
    };

    loadGoogleMaps();
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default GoogleMapComponent;
