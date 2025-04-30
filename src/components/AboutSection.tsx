import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About ZaPlatform</h2>
          <div className="w-16 h-1 bg-[#244c73] mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative fade-in-element" style={{ '--delay': '100ms' } as React.CSSProperties}>
              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-[#244c73] text-white rounded-full p-0">
                <img 
                  src="/lovable-uploads/zak.jpeg" 
                  alt="Zak" 
                  className="w-12 h-20 rounded-full object-cover"
                />
              </div>
              <h3 className="text-4xl font-bold mb-4 mt-4 text-center">👋🏻</h3>
              <p className="text-gray-600 mb-4">
              Hi, I'm Mohamed El-Zoghbi — You can call me <span className="font-bold">Zak</span>. I'm a software engineer who loves building simple, useful apps that make everyday life a little better. Whether it's a sleek wallpapers app or a tool to solve a small problem, I'm always exploring new ideas and bringing them to life through code.

              </p>
              <p className="text-gray-600">
              ZaPlatform is where I share my side projects, experiments, and anything I create along the way.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 fade-in-element" style={{ '--delay': '300ms' } as React.CSSProperties}>
              <h3 className="text-xl font-bold mb-4">Our Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-[#244c73]/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-[#244c73] rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Create applications that solve real problems</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#244c73]/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-[#244c73] rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Focus on intuitive, user-friendly design</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#244c73]/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-[#244c73] rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Maintain high performance and reliability</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#244c73]/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-[#244c73] rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Respond to user feedback and continuously improve</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 fade-in-element" style={{ '--delay': '500ms' } as React.CSSProperties}>
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p className="text-gray-600">
                To create a suite of applications that enhance everyday digital life, 
                bringing value to users through thoughtful design and useful functionality.
                ZaPlatform aims to grow its portfolio with apps that maintain the same level 
                of quality and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
