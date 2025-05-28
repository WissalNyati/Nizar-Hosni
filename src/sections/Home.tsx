import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-cover bg-center relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/7191981/pexels-photo-7191981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in">
            Making an Impact Through
            <span className="block text-accent-300">Code, Camera, and Compassion</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 fade-in stagger-delay-1">
            Hi, I'm Nizar Hosni — a developer, video creator, and language enthusiast 
            from Tunisia with a passion for making a positive difference through 
            technology and communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-delay-2">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              onClick={() => {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </Button>
            
            <a 
              href="/nizar-hosni-cv.pdf" 
              download="Nizar-Hosni-CV.pdf"
              id="cv-download"
              className="hidden"
            >
              Download CV
            </a>
            
            <Button
              variant="outline"
              size="lg"
              icon={<Download className="w-5 h-5" />}
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              onClick={() => {
                // In a real implementation, this would trigger a download
                alert("In a real implementation, this would download the CV. For this demo, we're just showing an alert.");
              }}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 fade-in stagger-delay-3">
        <div 
          className="w-8 h-14 border-2 border-white rounded-full flex justify-center p-1 cursor-pointer animate-bounce"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;