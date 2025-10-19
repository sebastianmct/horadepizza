import "./assets/blog.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import blogPosts from "../../data/blog-posts";
import ScrollBtn from "../../components/ScrollBtn";
import ResetLocation from "../../utils/ResetLocation";
import BlogPosts from "./components/BlogPosts";
import { slideInLeft } from "../../utils/animations";
const BlogPage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 5);
  const [currentBlogPosts, setcurrentBlogPosts] = useState([...blogPosts].reverse().slice(itemOffset, endOffset));
  const [pageCountPosts, setpageCountPosts] = useState(Math.ceil(blogPosts.length / 5));

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % blogPosts.length;
    setItemOffset(newOffset);
    ResetLocation();
  };

  useEffect(() => {
    document.title = "Blog | Es hora de Pizza";
    setEndOffset(itemOffset + 5);
    setcurrentBlogPosts([...blogPosts].reverse().slice(itemOffset, endOffset));
    setpageCountPosts(Math.ceil(blogPosts.length / 5));
  }, [setEndOffset, endOffset, itemOffset]);
  return (
    <motion.main
      className="blog"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Blog</h2>
      <p className="blog__intro">
        Bienvenido al blog de Pizza Time, tu fuente principal para todo lo relacionado con el mundo de la pizza. Aquí
        compartimos recetas deliciosas, consejos para hacer la pizza perfecta en casa, historias detrás de nuestras creaciones
        y las últimas novedades de nuestra pizzería. Ya seas un amante de la pizza o simplemente busques inspiración culinaria,
        nuestro blog tiene algo para todos. ¡Explora, aprende y disfruta del maravilloso mundo de la pizza con nosotros!
      </p>
      <section className="blog__posts" aria-labelledby="blog-posts-title">
        <h2 id="blog-posts-title" className="visually-hidden">
          Blog Recientes
        </h2>
        {currentBlogPosts.map((blogPost, index) => (
          <BlogPosts key={index} blogPost={blogPost} />
        ))}
      </section>
      <ReactPaginate
        className="pagination blog__pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountPosts}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
        aria-label="Blog pagination"
      />
      <ScrollBtn />
    </motion.main>
  );
};
export default BlogPage;

