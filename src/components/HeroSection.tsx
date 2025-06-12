
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-delwingz-red flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-delwingz-red via-delwingz-red to-red-700"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-delwingz-off-white leading-none mb-6">
              REVOLUTIONIZING
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-delwingz-black leading-none mb-8">
              INDIA'S ONLINE<br />
              NON‑VEG FOOD<br />
              <span className="text-delwingz-off-white">DELIVERY</span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-up" style={{animationDelay: '0.2s'}}>
            <Button 
              size="lg" 
              className="bg-delwingz-black hover:bg-delwingz-black/90 text-delwingz-off-white text-lg px-8 py-6 rounded-full font-semibold"
            >
              Order Now
            </Button>
            <Button 
              size="lg" 
              className="bg-delwingz-black hover:bg-delwingz-black/90 text-delwingz-off-white text-lg px-8 py-6 rounded-full font-semibold border-2 border-delwingz-black"
            >
              Explore Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-delwingz-black/20 rounded-full"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-delwingz-off-white/20 rounded-full"></div>
    </section>
  );
};

export default HeroSection;
