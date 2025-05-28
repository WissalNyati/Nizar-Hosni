import React, { useEffect, useState, useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, className = '' }) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(level);
            }, 300);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [level]);
  
  return (
    <div ref={skillRef} className={`mb-6 ${className}`}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-neutral-700">{name}</span>
        <span className="text-sm font-medium text-primary-600">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;