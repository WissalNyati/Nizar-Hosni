import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillBar from '../components/SkillBar';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Skills"
          subtitle="A comprehensive overview of my technical and soft skills."
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-primary-700 border-b border-neutral-200 pb-2">
                {category.name}
              </h3>
              
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    className={`stagger-delay-${skillIndex % 5 + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary-700 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">Why My Skills Matter</h3>
            <p className="mb-6">
              I believe my diverse skill set allows me to approach problems from multiple angles 
              and communicate effectively across different domains and cultures.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-2">Technical Versatility</h4>
                <p className="text-white/80 text-sm">
                  My background in multiple programming languages and technologies enables me to select 
                  the right tool for each unique challenge.
                </p>
              </div>
              
              <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-2">Global Communication</h4>
                <p className="text-white/80 text-sm">
                  Speaking multiple languages allows me to connect with diverse communities and bring 
                  different perspectives to my work.
                </p>
              </div>
              
              <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-2">Creative Problem-Solving</h4>
                <p className="text-white/80 text-sm">
                  My combination of technical knowledge and creative skills helps me develop innovative 
                  solutions that are both functional and engaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;