
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Package, Image, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedApp = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in-element" style={{ '--delay': '100ms' } as React.CSSProperties}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ZaPixel Wallpapers</h2>
          <p className="text-gray-600">Transform your devices with our curated collection of high-quality wallpapers</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 fade-in-element" style={{ '--delay': '300ms' } as React.CSSProperties}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-8">
              <img 
                src="https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?w=800&auto=format&fit=crop" 
                alt="ZaPixel App Screenshot" 
                className="w-full h-auto rounded-lg shadow-md mb-6"
              />
              <div className="text-center">
                <Button 
                  className="bg-[#244c73] hover:bg-[#1c3c5c] text-white"
                  onClick={() => window.open('https://zapixel.zaplatform.com', '_blank')}
                >
                  Visit ZaPixel <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 fade-in-element" style={{ '--delay': '500ms' } as React.CSSProperties}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <div className="bg-[#244c73]/10 p-2 rounded-full">
                      <Image size={20} className="text-[#244c73]" />
                    </div>
                    <div>
                      <h4 className="font-medium">High Quality</h4>
                      <p className="text-sm text-gray-600">Crisp, beautiful wallpapers optimized for all screens</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <div className="bg-[#244c73]/10 p-2 rounded-full">
                      <ArrowRight size={20} className="text-[#244c73]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Easy Download</h4>
                      <p className="text-sm text-gray-600">One-click download for all your devices</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <div className="bg-[#244c73]/10 p-2 rounded-full">
                      <Package size={20} className="text-[#244c73]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Regular Updates</h4>
                      <p className="text-sm text-gray-600">New wallpapers added frequently</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <div className="bg-[#244c73]/10 p-2 rounded-full">
                      <Calendar size={20} className="text-[#244c73]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Seasonal Collections</h4>
                      <p className="text-sm text-gray-600">Themed collections for holidays and seasons</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <p className="text-gray-600 mb-4">
                ZaPixel offers a carefully curated selection of wallpapers for phones, tablets, and desktops. 
                Our collection includes abstract designs, landscapes, minimalist patterns, and more.
              </p>
              <Button 
                variant="outline" 
                className="border-[#244c73] text-[#244c73] hover:bg-[#244c73] hover:text-white"
                onClick={() => window.open('https://zapixel.zaplatform.com', '_blank')}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApp;
