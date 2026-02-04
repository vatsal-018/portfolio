import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={item}
      className="glass glass-hover rounded-lg overflow-hidden group"
    >
      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-white">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-4">{project.description}</p>

        {/* Image Container */}
        {project.imageUrl && (
          <div className="relative h-48 overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-blue-600 to-purple-600">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded text-xs bg-blue-500 bg-opacity-20 text-blue-300 border border-blue-500 border-opacity-30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 rounded border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-sm font-semibold text-center transition"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
