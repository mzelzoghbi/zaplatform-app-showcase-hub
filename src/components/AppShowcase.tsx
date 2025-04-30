import AppCard from './AppCard';
import { Calendar, Image, Package } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section id="apps" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Applications</h2>
          <p className="text-gray-600">Discover our collection of carefully crafted applications designed to enhance your digital life</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AppCard 
            name="ZaPixel Wallpapers"
            description="High-quality wallpapers optimized for all your devices. Customize your screens with stunning imagery from our carefully curated collection."
            imageUrl="/lovable-uploads/zapixelshowcase.png"
            androidUrl="https://play.google.com/store/apps/details?id=com.zaplatform.zapixel"
            appleUrl="https://apps.apple.com/eg/app/zapixel-ai-4k-wallpapers/id6742073049"
            featured={true}
            delay={100}
          />
          
          <div className="za-card p-6 flex flex-col items-center justify-center text-center fade-in-element" style={{ '--delay': '300ms' } as React.CSSProperties}>
            <Calendar size={48} className="text-[#244c73] mb-4" />
            <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
            <p className="text-gray-600">Our productivity app is in development. Stay tuned!</p>
          </div>
          
          <div className="za-card p-6 flex flex-col items-center justify-center text-center fade-in-element" style={{ '--delay': '500ms' } as React.CSSProperties}>
            <Package size={48} className="text-[#244c73] mb-4" />
            <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
            <p className="text-gray-600">Something exciting is in the works!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
