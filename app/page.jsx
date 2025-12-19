"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import Skills from "../components/Skills.jsx";
import About from "../components/About.jsx";
import Service from "../components/Service.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import Footer from "../components/Footer.jsx";
import FloatingButtons from "../components/FloatingButtons.jsx";
import Contact from "../components/Contact.jsx";
import Project from "../components/Project.jsx";
import Experience from "../components/Experience.jsx";
import Education from "../components/Education.jsx";
import Hero from "../components/Hero.jsx";
import Header from "../components/Header.jsx";

export default function Portfolio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        data={data}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <main className="pt-20">
        <Hero data={data} scrollToSection={scrollToSection} loading={loading} />

        <About data={data} />
        <Service data={data} />

        <Skills data={data} />

        <Education data={data} />

        <Experience data={data} />

        <Project data={data} />

        <SocialLinks data={data} />

        <Contact data={data} />
      </main>

      <Footer data={data} scrollToSection={scrollToSection} />
      <FloatingButtons
        data={data}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />
    </div>
  );
}
