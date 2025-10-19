import "./assets/not-found.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { slideInLeft } from "../../utils/animations";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "404 | Es hora de pizza!";
  }, []);
  return (
    <motion.main
      className="not-found"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <img
        src="https://media2.giphy.com/media/KTrm3NshQvM1M80sSO/200w.webp?cid=ecf05e4752zryvnz616xiuea6iitfabr5vfs70z4x1u0qsyy&ep=v1_stickers_search&rid=200w.webp&ct=ts"
        alt=""
        aria-hidden="true"
      />
      <h2>Esta pagina no esta disponible</h2>
      <p>Lo sentimos. No encontramos la pagina</p>
    </motion.main>
  );
};

export default NotFoundPage;

