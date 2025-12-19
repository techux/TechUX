import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import Typed from "typed.js";

const Hero = ({ data, scrollToSection, loading }) => {
  useEffect(() => {
    if (!loading && data) {
      const typed = new Typed("#typed-text", {
        strings: data.roles,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [loading, data]);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
          Hi, I'm <span className="text-primary">{data.name}</span>
        </h1>
        <h2
          className="text-xl md:text-3xl mb-8 h-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span id="typed-text"></span>
        </h2>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-muted-foreground"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {data.shortBio}
        </p>
        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Button onClick={() => scrollToSection("contact")} size="lg">
            Get in Touch
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            variant="outline"
            size="lg"
          >
            View My Work
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
