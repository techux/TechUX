import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Project = ({ data }) => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map(
            (project, index) =>
              project.display && (
                <Card
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="overflow-hidden group border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.type && (
                      <div>
                        <Badge variant="primary" className="m-10">
                          {project.type}
                        </Badge>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    {project.demoUrl && (
                      <Button asChild size="sm" variant="default">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.codeUrl && (
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source Code
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
