import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filterTags = ['all', 'web', 'video', 'language', 'community'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => {
        switch(filter) {
          case 'web':
            return project.tags.some(tag => 
              ['React', 'JavaScript', 'HTML/CSS', 'UI/UX'].includes(tag)
            );
          case 'video':
            return project.tags.some(tag => 
              ['Video Editing', 'Premiere Pro', 'Storytelling'].includes(tag)
            );
          case 'language':
            return project.title.toLowerCase().includes('language');
          case 'community':
            return project.title.toLowerCase().includes('community');
          default:
            return true;
        }
      });
  
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Portfolio"
          subtitle="Explore a selection of my projects showcasing my skills and experiences."
          alignment="center"
        />
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {filterTags.map(tag => (
              <button
                key={tag}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === tag
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setFilter(tag)}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="fade-in stagger-delay-1">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                codeUrl={project.codeUrl}
              />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-500">No projects found for this filter.</p>
          </div>
        )}
        
        <div className="mt-16 bg-neutral-50 p-8 rounded-lg shadow-inner text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary-700">Let's Work Together</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            Interested in collaborating on a project or have a volunteer opportunity? I'm always open to new 
            challenges and ways to make a positive impact.
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;