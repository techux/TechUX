import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center" data-aos="fade-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src={data.profileImage || "/placeholder.svg"}
                alt={data.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 16rem, 20rem"
              />
            </div>
          </div>
          <div data-aos="fade-left">
            <p className="text-muted-foreground mb-6">{data.about}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {data.personalDetails.map((detail, index) => (
                <div key={index}>
                  <span className="font-semibold">{detail.label}:</span>{" "}
                  {detail.value}
                </div>
              ))}
            </div>
            <Button asChild>
              <a
                href={data.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
