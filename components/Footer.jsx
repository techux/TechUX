"use client";

export default function Footer({ data, scrollToSection }) {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} {data.name}. All rights
              reserved.
            </p>
          </div>
          <nav className="flex space-x-6">
            {["home", "about", "services", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm text-muted-foreground hover:text-primary capitalize"
                >
                  {section}
                </button>
              )
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
