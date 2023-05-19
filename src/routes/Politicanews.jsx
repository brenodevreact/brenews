import React from "react";
import Politicasnews from "../components/Politicanews";
import { motion } from "framer-motion";

const Politicanews = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Politicasnews />
    </motion.div>
  );
};

export default Politicanews;
