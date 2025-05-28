import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Me"
          subtitle="Have a question or want to work together? Let's connect."
          alignment="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-10">
              <p className="text-neutral-600 mb-6">
                I'm always interested in hearing about new projects, opportunities, or just having 
                a conversation about how we can make a positive impact together.
              </p>
              
              <blockquote className="border-l-4 border-primary-500 pl-4 italic my-6 text-neutral-700">
                "Let's connect and build something meaningful."
              </blockquote>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">Email</h4>
                  <a 
                    href="mailto:NizarHosni@protonmail.com" 
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    NizarHosni@protonmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">Phone</h4>
                  <a 
                    href="tel:+21651012416" 
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    +216 51012416
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">Location</h4>
                  <p className="text-neutral-600">Tunisia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">Languages</h4>
                  <p className="text-neutral-600">
                    Arabic (native), English (fluent), French (fluent), 
                    Polish (basic), German (basic), Russian (basic)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;