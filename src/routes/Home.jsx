import Header from "../components/Header";
import News from "../components/News";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <News />
      </motion.div>
    </>
  );
};

export default Home;
