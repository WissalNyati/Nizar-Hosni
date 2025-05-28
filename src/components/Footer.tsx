import React from 'react';
import { Heart, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-5 h-5 text-primary-300" />
              <h3 className="text-xl font-bold text-white">Nizar Hosni</h3>
            </div>
            <p className="text-primary-200 text-sm mb-4 font-sans">
              Making an impact through code, camera, and compassion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:NizarHosni@protonmail.com" 
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+21651012416" 
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-primary-200">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>NizarHosni@protonmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+216 51012416</span>
              </li>
              <li className="flex items-start space-x-2">
                <ExternalLink className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cv-download')?.click();
                  }}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-700 text-center text-primary-300 text-sm">
          <p>&copy; {currentYear} Nizar Hosni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;