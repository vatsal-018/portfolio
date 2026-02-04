import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming',
      skills: [
        { name: 'C', proficiency: 65 },
        { name: 'C++', proficiency: 70 },
        { name: 'Java', proficiency: 68 },
        { name: 'Python', proficiency: 80 },
      ],
    },
    {
      category: 'Web',
      skills: [
        { name: 'HTML', proficiency: 72 },
        { name: 'CSS', proficiency: 70 },
        { name: 'JavaScript', proficiency: 68 },
        { name: 'React.js', proficiency: 65 },
        { name: 'Node.js', proficiency: 62 },
        { name: 'Flask', proficiency: 78 },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', proficiency: 70 },
        { name: 'MongoDB', proficiency: 65 },
      ],
    },
    {
      category: 'ML / Data',
      skills: [
        { name: 'TensorFlow', proficiency: 82 },
        { name: 'PyTorch', proficiency: 78 },
        { name: 'scikit-learn', proficiency: 80 },
        { name: 'Keras', proficiency: 85 },
        { name: 'OpenCV', proficiency: 83 },
      ],
    },
    {
      category: 'Visualization',
      skills: [
        { name: 'Power BI', proficiency: 68 },
        { name: 'Pandas', proficiency: 78 },
        { name: 'Matplotlib', proficiency: 80 },
        { name: 'Seaborn', proficiency: 82 },
        { name: 'Plotly', proficiency: 70 },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', proficiency: 72 },
        { name: 'GitHub', proficiency: 70 },
        { name: 'Netlify', proficiency: 60 },
        { name: 'Vercel', proficiency: 58 },
        { name: 'Railway', proficiency: 55 },
        { name: 'XAMPP', proficiency: 65 },
        { name: 'VS Code', proficiency: 74 },
        { name: 'Jupyter', proficiency: 76 },
      ],
    },
  ];

  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A snapshot of my technical skills across programming, web, data, and tools.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category.category} skills={category.skills} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
