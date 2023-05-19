import React from "react";
import SportNews from "../components/Sportnews";
import { motion } from "framer-motion";

const Esportenews = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SportNews />
    </motion.div>
  );
};

export default Esportenews;
