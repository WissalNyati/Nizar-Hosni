import React from 'react';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know the person behind the screen, camera, and languages."
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/7191981/pexels-photo-7191981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Scenic view of Tunisia"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-primary-700">Born: September 27, 2005</p>
              <p className="text-sm text-neutral-600">Tunisia</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-primary-700 mb-4">
              A Passion for Making a Difference
            </h3>
            
            <div className="space-y-4 text-neutral-700">
              <p>
                I'm Nizar, a 19-year-old from Tunisia with a passion for technology, languages, and helping others. 
                From a young age, I've been fascinated by how code can create solutions and how communication can 
                bridge cultures.
              </p>
              
              <p>
                My journey began with learning to code in C and Java, eventually expanding to web development. 
                Alongside my technical pursuits, I discovered a love for languages—currently speaking Arabic, 
                English, and French fluently, with basic knowledge of Polish, German, and Russian.
              </p>
              
              <p>
                What drives me most is using these skills to contribute positively to my community and beyond. 
                Whether it's developing applications that solve real problems, creating videos that raise awareness 
                about important issues, or tutoring students who need support, I believe that even small efforts 
                can create meaningful change.
              </p>
              
              <p>
                My approach to work is defined by patience, empathy, and persistence. I stay calm under pressure 
                and enjoy collaborating with diverse teams to achieve shared goals.
              </p>
              
              <blockquote className="border-l-4 border-primary-500 pl-4 italic my-6">
                "I believe technology and communication, when used with compassion, can be powerful forces for good in the world."
              </blockquote>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full">
                Patient
              </div>
              <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full">
                Empathetic
              </div>
              <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full">
                Motivated
              </div>
              <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full">
                Problem-solver
              </div>
              <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full">
                Volunteer
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">6+</div>
            <p className="text-neutral-700">Programming Languages</p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">6</div>
            <p className="text-neutral-700">Languages Spoken</p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
            <p className="text-neutral-700">Projects Completed</p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
            <p className="text-neutral-700">Hours Volunteering</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;