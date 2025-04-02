import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
export function Header() {
  return <header className="bg-white w-full border-b border-[rgba(255,255,255,0)]">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-gray-900 text-3xl font-bold leading-[1.2] tracking-[-0.6px]">
          Ana Cristina Moya
        </h1>

        <nav className="flex items-center gap-6">
          <a href="#about" className="text-base text-gray-600 font-medium">
            About
          </a>
          <a href="#work" className="text-base text-gray-600 font-medium">About me</a>
          <a href="#testimonials" className="text-base text-gray-600 font-medium">Skills and Tools</a>
          <a href="#contact" className="text-base text-gray-600 font-medium">
            Contact
          </a>

          <div className="h-6 border-l border-gray-100" />

          

          <Button className="bg-gray-900 text-gray-50">Download CV</Button>
        </nav>
      </div>
    </header>;
}