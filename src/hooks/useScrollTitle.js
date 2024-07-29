import { useState, useEffect } from "react";

const useScrollTitle = (titles) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateTitle = () => {
      const sections = Object.keys(titles); // Get all section IDs
      let foundTitle = "Default Title"; // Default title if no section is in view

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect(); //rect is size and postion of dom
          // Check if the section is in the viewport
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            foundTitle = titles[sectionId]; // Set the title for the section in view
            setActiveSection(sectionId); // Set the active section ID
            break; // Exit loop once we find a section in view
          }
        }
      }
      document.title = foundTitle; // Update the document title
    };

    window.addEventListener("scroll", updateTitle);
    updateTitle(); // Initial call

    return () => {
      window.removeEventListener("scroll", updateTitle);
    };
  }, [titles]);

  return activeSection;
};

export default useScrollTitle;
