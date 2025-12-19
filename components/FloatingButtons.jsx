"use client";

import * as LucideIcons from "lucide-react";
import { useEffect, useState } from "react";
import * as ReactIcons from "react-icons/fa";

const FloatingButtons = ({ data, showScrollTop, scrollToTop }) => {
  const [actionButtonBottom, setActionButtonBottom] = useState(10);

  useEffect(() => {
    const handleScroll = () =>
      setActionButtonBottom(window.scrollY > 300 ? 80 : 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {console.log(actionButtonBottom)}
      <div
        className="fixed right-6 flex flex-col space-y-2 z-50 transition-all duration-300"
        style={{ bottom: actionButtonBottom + "px" }}
      >
        <a
          href={data.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300"
          title="Download Resume"
        >
          <LucideIcons.FileText className="h-6 w-6" />
        </a>
        <a
          href={`https://wa.me/${data.contactInfo
            .find((info) => info.type === "Phone")
            ?.value.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <ReactIcons.FaWhatsapp className="h-6 w-6" />
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <LucideIcons.ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;