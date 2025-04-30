
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-[#244c73] py-20 md:py-28 text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight fade-in-element" style={{ '--delay': '100ms' } as React.CSSProperties}>
              Beautiful Apps for <br className="hidden md:block" />
              <span className="text-white/90">Everyday Life</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-md fade-in-element" style={{ '--delay': '300ms' } as React.CSSProperties}>
              Indie-developed applications crafted with care and attention to detail, designed to enhance your digital experience.
            </p>
            
            <div className="pt-4 fade-in-element" style={{ '--delay': '500ms' } as React.CSSProperties}>
              <Button 
                size="lg"
                variant="secondary"
                className="group rounded-full shadow-lg"
                onClick={() => document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover Our Apps
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center fade-in-element" style={{ '--delay': '700ms' } as React.CSSProperties}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
              <div className="absolute z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
                <div className="bg-gradient-to-br from-[#244c73] to-[#1c3c5c] w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold">ZA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
