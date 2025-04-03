
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white w-full border-b border-[rgba(255,255,255,0)]">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-gray-900 text-3xl font-bold leading-[1.2] tracking-[-0.6px]">
          Ana Cristina Moya
        </h1>

        <nav className="flex items-center gap-6">
          <a href="#about" className="text-base text-gray-600 font-medium">
            About
          </a>
          <a href="#skills" className="text-base text-gray-600 font-medium">
            Skills
          </a>
          <a
            href="#experience"
            className="text-base text-gray-600 font-medium"
          >
            Experience
          </a>
          <a
            href="#education"
            className="text-base text-gray-600 font-medium"
          >
            Education
          </a>
          <a href="#contact" className="text-base text-gray-600 font-medium">
            Contact
          </a>

          <div className="h-6 border-l border-gray-100" />

          <Button variant="ghost" size="icon" className="w-9 h-9">
            <Moon className="h-6 w-6" />
          </Button>

          <a 
            href="https://github.com/anacristinamoya/ProductManagerCV/blob/main/PM_Ana_Cristina_Moya.pdf" 
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gray-900 text-gray-50">Download CV</Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
