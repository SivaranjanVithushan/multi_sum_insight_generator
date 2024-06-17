// About.tsx
import React from 'react';
import Members from './Members';

const About: React.FC = () => {
  return (
    <div>
      <Members />
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-white text-center">
          MULTILINGUAL DATA SUMMARIZATION AND INSIGHTS GENERATION FOR DECISION-MAKING IN GROCERY RETAIL
        </h3>
      </div>
    </div>
  );
};

export default About;