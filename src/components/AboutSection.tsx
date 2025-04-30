
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About ZaPlatform</h2>
          <div className="w-16 h-1 bg-za-purple mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative fade-in-element" style={{ '--delay': '100ms' } as React.CSSProperties}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-za-purple text-white rounded-full p-3">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4 text-center">The Indie Developer</h3>
              <p className="text-gray-600 mb-4">
                ZaPlatform is a solo indie development studio focused on creating useful and 
                beautiful applications. As a passionate developer, I strive to build tools 
                that enhance the digital experience while maintaining high standards of quality 
                and user experience.
              </p>
              <p className="text-gray-600">
                Each application is carefully crafted with attention to detail, from conceptualization 
                to execution. My goal is to create apps that are not only functional but also delightful to use.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 fade-in-element" style={{ '--delay': '300ms' } as React.CSSProperties}>
              <h3 className="text-xl font-bold mb-4">Our Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-za-purple/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-za-purple rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Create applications that solve real problems</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-za-purple/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-za-purple rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Focus on intuitive, user-friendly design</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-za-purple/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-za-purple rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Maintain high performance and reliability</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-za-purple/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-za-purple rounded-full"></div>
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
