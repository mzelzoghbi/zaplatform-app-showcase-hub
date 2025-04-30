import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Package, Image, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedApp = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in-element" style={{ '--delay': '100ms' } as React.CSSProperties}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ZaPixel Wallpapers</h2>
          <p className="text-gray-600">Elevate your device's look today with ZaPixel—the only wallpaper app you'll ever need.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 fade-in-element" style={{ '--delay': '300ms' } as React.CSSProperties}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-8">
              <div className="bg-gradient-to-br from-[#244c73] to-[#1c3c5c] w-full h-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/favicon.png" 
                  alt="ZaPlatform" 
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="flex flex-col items-center space-y-2">
            <Button 
              className="w-48 bg-[#4285F4] hover:bg-[#3367D6] text-white flex items-center justify-center gap-2 py-2"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.zaplatform.zapixel", '_blank')}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play
            </Button>
          
            <Button 
              className="w-48 bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2 py-2"
              onClick={() => window.open("https://apps.apple.com/eg/app/zapixel-ai-4k-wallpapers/id6742073049", '_blank')}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              App Store
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
                      <h4 className="font-medium">AI-Generated Wallpapers
                        
                      </h4>
                      <p className="text-sm text-gray-600">Type your idea — get a unique wallpaper in seconds.</p>
                    </div>
                  </CardContent>
                </Card>
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
