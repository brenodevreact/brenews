import React from "react";
import TechNews from "../components/Technews";
import { motion } from "framer-motion";

const Technews = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <TechNews />
    </motion.div>
  );
};

export default Technews;
