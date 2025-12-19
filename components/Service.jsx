import * as LucideIcons from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Service = ({ data }) => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          My <span className="text-primary">Services</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => {
            const IconComponent = LucideIcons[service.icon]; // get the component dynamically
            return (
              <Card
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    {IconComponent && <IconComponent className="text-2xl" />}{" "}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
