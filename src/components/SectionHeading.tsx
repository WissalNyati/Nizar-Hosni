import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'left',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-20 h-1 bg-primary-600 rounded-full">
        <div className="w-12 h-1 bg-secondary-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeading;