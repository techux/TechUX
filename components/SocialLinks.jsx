import * as ReactIcons from "react-icons/fa";

const SocialLinks = ({ data }) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10" data-aos="fade-up">
          Connect <span className="text-primary">With Me</span>
        </h2>
        <div
          className="flex justify-center space-x-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {data.socialLinks.map((social, index) => {
            const IconComponent = ReactIcons[social.icon];
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-background border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label={social.name}
              >
                <IconComponent className="text-xl" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
