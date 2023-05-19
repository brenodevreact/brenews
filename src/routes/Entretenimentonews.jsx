import React from "react";
import Entretenimentosnews from "../components/Entretenimentonews";
import { motion } from "framer-motion";

const Entretenimentonews = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Entretenimentosnews />
    </motion.div>
  );
};

export default Entretenimentonews;
