import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {data.skills.technical.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.level}%` }}
                      data-aos="slide-right"
                      data-aos-delay={index * 100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6">Professional Skills</h3>
            <div className="space-y-6">
              {data.skills.professional.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.level}%` }}
                      data-aos="slide-right"
                      data-aos-delay={index * 100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-center">GitHub Stats</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Image
              src="https://github-readme-stats-total-kinky-69.vercel.app/api?username=techux&show_icons=true&include_all_commits=true&theme=react&cache_seconds=30&hide_border=true"
              width={450}
              height={195}
              alt="Devesh's GitHub Stats"
            />
            <Image
              src="https://github-readme-stats-total-kinky-69.vercel.app/api/top-langs/?username=techux&layout=compact&theme=react&hide_border=true"
              width={350}
              height={175}
              alt="Devesh's GitHub Top Programming Languages"
            />
          </div>
        </div>

        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
