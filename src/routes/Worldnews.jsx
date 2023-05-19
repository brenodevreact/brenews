import React from "react";
import { motion } from "framer-motion";
import Mundonews from "../components/Mundonews";

const Worldnews = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Mundonews />
    </motion.div>
  );
};

export default Worldnews;
