
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import Carrusel1 from "../Assets/img/development_IMG.png";
import Carrusel2 from "../Assets/img/developments_IMG2.png";
import Carrusel3 from "../Assets/img/developments_IMG3.png";
import colorSharp from "../Assets/img/Header_Img2.png";

export const Development  = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='Developments' id='Development'>
            <Container>
                <Row>
                    <Col>
                    <div className='developments-bx'>
                        <h1>
                        Desarrollo de Software: <br/> La Solución Dinámica Para Tus Necesidades
                        </h1>
                        <p>En nuestro equipo de expertos en desarrollo de software, 
creamos soluciones progresivas y amigables para el usuario. 
Contacta con nosotros y descubre cómo podemos ayudarte 
a innovar y crecer con las mejores herramientas digitales.</p>
                        <Carousel responsive={responsive} infinite={true} className='developments-slider'>
                          <div className='item'>
                            <img src={Carrusel1} alt='Image'/>
                            <br/>
                            <h3>Desarrollo De Aplicaciones Móvil Y WEB</h3>
                            <br/>
                            <h5>Creación De Aplicaciones A Medida Y Amigables Para El Usuario, Para Mejorar La Interacción Entre El Cliente Y Tu Empresa.</h5>
                          </div>
                          <div className='item'>
                            <img src={Carrusel2} alt='Image'/>
                            <br/>
                            <br/>
                            <br/>
                            <h3>Software Empresarial</h3>
                            <br/>
                            <h5>Desarrollo De Software De Gestión Empresarial, Asegurando Procesos Eficientes Y Precisos En La Empresa Para Mejorar La Productividad.</h5>
                          </div>
                          <div className='item'>
                            <img src={Carrusel3} alt='Image'/>
                            <h3>Integración De Sistema</h3>
                            <br/>
                            <h5>Integración De Sistemas Para Mejorar La Eficiencia Y Productividad Empresarial A Través De Un Conjunto Sólido Y Coherente De Tecnologías.</h5>
                          </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" />

        </section>
      )
}