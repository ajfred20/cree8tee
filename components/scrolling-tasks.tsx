"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollingTasksProps {
  pendingTasks: string[];
  completedTasks: string[];
}

const ScrollingTasks: React.FC<ScrollingTasksProps> = ({
  pendingTasks,
  completedTasks,
}) => {
  return (
    <div className="flex gap-4 overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {pendingTasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full whitespace-nowrap"
          >
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <span>{task}</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {completedTasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full whitespace-nowrap"
          >
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>{task}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTasks;
