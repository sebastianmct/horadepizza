import OfficeTwo from "../assets/office-1.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../../utils/ResetLocation";

const AboutCollaboration = () => {
  return (
    <section className="about__collaboration" aria-labelledby="collab-title">
      <img src={OfficeTwo} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />
      <article className="about__collaboration__content">
        <h2 className="sub-title" id="collab-title">
          Colaboraciones
        </h2>
        <h3>Unete a Colaborar </h3>
        <p>
          En Pizza Time, creemos en el poder de la colaboración para crear experiencias culinarias excepcionales. Estamos
          abiertos a asociarnos con chefs talentosos, proveedores locales y entusiastas de la gastronomía que compartan nuestra
          pasión por la pizza. Si tienes una idea innovadora, una receta única o simplemente quieres ser parte de nuestro viaje,
          nos encantaría saber de ti. Juntos, podemos llevar la experiencia de la pizza a nuevas alturas y deleitar a nuestros
          clientes con sabores inolvidables.
        </p>
        <Link to="/contact" onClick={ResetLocation} aria-label="Request a call" className="active-button-style">
          Contáctanos
        </Link>
      </article>
    </section>
  );
};

export default AboutCollaboration;

