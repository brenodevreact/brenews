import React from "react";
import Cienciasnews from "../components/Ciencianews";
import { motion } from "framer-motion";

const Ciencianews = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Cienciasnews />
    </motion.div>
  );
};

export default Ciencianews;
