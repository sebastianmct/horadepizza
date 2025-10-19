import ImgOne from "../assets/img-1.jpeg";
import ImgTwo from "../assets/img-2.jpeg";
import ImgThree from "../assets/img-3.jpeg";

const AboutCustomers = () => {
  return (
    <section className="about__customers" aria-labelledby="customers-title">
      <div className="about__customers_gallery">
        <img src={ImgOne} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />
        <img src={ImgTwo} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />
        <img src={ImgThree} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />
      </div>
      <article className="about__customers__content">
        <h2 className="sub-title" id="customers-title">
          Clientes Satisfechos
        </h2>
        <h3>Acerca de 16000 reseñas positivas</h3>
        <p>
          En Es hora de Pizza, la satisfacción del cliente es nuestra máxima prioridad. Nos enorgullece haber servido a más de 16,000
          clientes felices que han disfrutado de nuestras deliciosas pizzas y excelente servicio. Nuestro compromiso con la calidad y la
          atención al detalle nos ha permitido construir una base sólida de clientes leales que confían en nosotros para satisfacer sus antojos
          de pizza. Agradecemos a cada uno de nuestros clientes por su apoyo continuo y esperamos seguir sirviendo sonrisas y pizzas deliciosas
          durante muchos años más.
        </p>
      </article>
      <div className="img-glass"></div>
    </section>
  );
};

export default AboutCustomers;

