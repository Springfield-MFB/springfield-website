"use client";

import React, { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    // Initialize Tawk.to
    const Tawk_API = (window as any).Tawk_API || {};
    const Tawk_LoadStart = new Date();

    // Create script element for Tawk.to
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6769ddbfaf5bfec1dbe0cce2/1ifqokdne";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Append the script to the body
    const scriptTarget = document.getElementsByTagName("script")[0];
    scriptTarget.parentNode?.insertBefore(script, scriptTarget);

    // Open chat when Tawk.to loads

    setTimeout(() => {
      script.onload = () => {
        if (typeof Tawk_API !== "undefined") {
          Tawk_API.onLoad = () => {
            Tawk_API.maximize(); // Expand the chat on load
          };
        }
      };
    }, 2000); // Open after 2 seconds

    return () => {
      // Cleanup script
      const loadedScripts = document.querySelectorAll(
        "script[src='https://embed.tawk.to/6769ddbfaf5bfec1dbe0cce2/1ifqokdne']"
      );
      loadedScripts.forEach((script) => script.remove());
    };
  }, []);

  return null; // No UI for this component
};

export default TawkToChat;
