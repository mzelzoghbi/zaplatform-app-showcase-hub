
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface AppCardProps {
  name: string;
  description: string;
  imageUrl: string;
  appUrl: string;
  featured?: boolean;
  delay?: number;
}

const AppCard = ({ name, description, imageUrl, appUrl, featured = false, delay = 0 }: AppCardProps) => {
  return (
    <div 
      className={`za-card hover-scale fade-in-element ${featured ? 'col-span-full md:col-span-2 md:flex' : ''}`}
      style={{ '--delay': `${delay}ms` } as React.CSSProperties}
    >
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : 'aspect-[4/3]'}`}>
        <img 
          src={imageUrl} 
          alt={name} 
          className={`w-full h-full object-cover ${featured ? 'md:h-full' : ''}`}
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-[#244c73] text-white text-xs uppercase font-bold py-1 px-3 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button 
          className="w-full bg-[#244c73] hover:bg-[#1c3c5c] text-white"
          onClick={() => window.open(appUrl, '_blank')}
        >
          Visit App <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AppCard;
