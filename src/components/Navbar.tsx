
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-delwingz-off-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-display font-bold delwingz-black">
          DELWINGZ
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-delwingz-black hover:text-delwingz-red transition-colors">
            Home
          </a>
          <a href="#menu" className="text-delwingz-black hover:text-delwingz-red transition-colors">
            Menu
          </a>
          <a href="#" className="text-delwingz-black hover:text-delwingz-red transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="hidden md:inline-flex bg-delwingz-red hover:bg-delwingz-red/90 text-delwingz-off-white">
            Order Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
