import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Moon } from "lucide-react";

const Header = ({ data, scrollToSection, activeSection }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            {data.name.split(" ")[0]}
            <span className="text-primary">{data.name.split(" ")[1]}</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {[
              "home",
              "about",
              "services",
              "skills",
              "education",
              "experience",
              "projects",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium capitalize transition-colors hover:text-primary ${
                  activeSection === section ? "text-primary" : ""
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <div className="md:hidden">
              <Tabs defaultValue="home" className="w-[200px]">
                <TabsList>
                  <TabsTrigger value="menu">Menu</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="menu"
                  className="absolute right-0 mt-2 w-48 py-2 bg-background border rounded-md shadow-lg"
                >
                  {[
                    "home",
                    "about",
                    "services",
                    "skills",
                    "education",
                    "experience",
                    "projects",
                    "contact",
                  ].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left px-4 py-2 text-sm capitalize hover:bg-muted"
                    >
                      {section}
                    </button>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
