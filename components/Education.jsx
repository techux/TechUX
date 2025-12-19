import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const Education = ({ data }) => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          My <span className="text-primary">Education</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

          {data.education.map((edu, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-auto md:mr-1/2"
                  : "md:pl-12 md:ml-1/2"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="md:w-1/2 md:max-w-md">
                <div className="absolute left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary top-0"></div>

                <Card className="border border-primary/10">
                  <CardHeader>
                    <div className="flex flex-col md:items-end">
                      <span className="text-sm text-muted-foreground">
                        {edu.duration}
                      </span>
                      <CardTitle className="mt-1">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        {edu.institution}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                  <CardFooter>
                    <span className="text-sm text-muted-foreground">
                      Grade: {edu.grade}
                    </span>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
