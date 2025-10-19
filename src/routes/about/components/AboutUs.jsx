import SlideOne from "../assets/img-one.jpeg";
import SlideTwo from "../assets/carbonara.jpeg";
import SlideThree from "../assets/img-three.jpeg";
import SlideFour from "../assets/img-four.jpeg";

const AboutUs = () => {
  return (
    <section className="about__company" aria-labelledby="about-title">
      <article className="about__company__content">
        <h2 id="about-title">Acerca de nosotros</h2>
        <h3 className="sub-title">Mas que una deliciosa comida</h3>
        <p>
        Fundada en 2023, Pizza Time se ha convertido rápidamente en un referente para los amantes de la pizza que buscan calidad, sabor y una experiencia culinaria excepcional. Nuestro compromiso con la excelencia nos impulsa a utilizar solo los mejores ingredientes frescos y a elaborar cada pizza con pasión y dedicación. Desde nuestras clásicas Margheritas hasta nuestras creaciones gourmet, cada pizza es una obra maestra diseñada para deleitar tu paladar. En Pizza Time, no solo hacemos pizzas; creamos momentos inolvidables alrededor de la mesa. ¡Ven y descubre por qué somos la elección favorita para los amantes de la pizza!
        </p>
        <ul>
          <li>La frescura, la originalidad y la calidad son nuestras prioridades.</li>
          <li>Precios asequibles, ubicados en casi cualquier lugar.</li>
          <li>Increíble sistema de pedidos online: pide comida con un solo clic.</li>
          <li>Opciones de reserva fáciles de navegar.</li>
          <li>¡Excelentes opciones para fiestas corporativas!</li>
        </ul>
      <p>En Pizza Time siempre nos preocupamos por ti, porque tú eres quien nos hace especiales. </p>
        <p>El proyecto Pizza Time fue creado con amor por la pizza por Ekaterine Mitagvaria. </p>
        <div className="about__company__glass"></div>
      </article>
      <div className="about__company__gallery">
        <img src={SlideOne} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />
        <img src={SlideTwo} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />
        <img src={SlideThree} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />
        <img src={SlideFour} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />
      </div>
    </section>
  );
};

export default AboutUs;

