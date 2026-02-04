import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { FiCode, FiDatabase, FiTool, FiUsers } from 'react-icons/fi';

const About = () => {
  const [imageError, setImageError] = useState(false);
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
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Computer Engineering student passionate about building innovative digital solutions
          </p>
        </motion.div>
      </section>

      {/* Bio */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Who Am I?</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I'm Vatsal Karani, a Computer Engineering student with a keen interest in full-stack
              development and AI/ML. I love solving complex problems and creating elegant solutions
              using modern technologies.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              With experience in various technologies, I'm committed to writing clean, maintainable
              code and staying updated with the latest industry trends. My goal is to build products
              that make a meaningful impact.
            </p>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-blue-400">Education:</span>
                <p className="text-slate-300">B.Tech in Computer Engineering</p>
                <p className="text-slate-400 text-sm">KJ Somaiya Institute of Technology, Sion, Mumbai</p>
              </div>
              <div>
                <span className="font-semibold text-blue-400">Location:</span>
                <p className="text-slate-300">India</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-2xl glass flex items-center justify-center overflow-hidden">
              {!imageError ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpoxLj7hayKkK_8EMLn0fRxs7p_3_60vVew&s"
                  alt="Vatsal Karani"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <div className="text-5xl font-bold text-blue-400">VK</div>
                  <div className="text-slate-400 text-sm">Profile Photo</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category.category} skills={category.skills} />
          ))}
        </div>
      </section>


    </div>
  );
};

export default About;
