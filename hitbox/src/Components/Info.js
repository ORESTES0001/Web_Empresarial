
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../Assets/img/Info_IMG.png";

export const Info  = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='Info' id='Info'>
            <Container>
                <Row>
                    <Col>
                    <div className='Info-bx'>
                        <h1>
                        ¿Por qué Nosotros? 
                        </h1>
                        <Carousel responsive={responsive} infinite={true} className='Info-slider'>
                          <div className='item'>
                            <h3>Servicio Al Cliente:</h3>
                            <br/>
                            <h5>Nuestro Equipo De Servicio Al Cliente Está Disponible Para Ayudarle En Todo Momento. Nos Aseguramos De Proporcionar El Mejor Soporte Para Clientes Y Satisfacer Sus Necesidades.</h5>
                          </div>
                          <div className='item'>
                            <h3>Compromiso Con La Calidad:</h3>
                            <br/>
                            <h5>En Nuestra Empresa, Nos Esforzamos Por Ofrecer Productos De La Más Alta Calidad Y Servicios Excepcionales Que Superen Las Expectativas De Nuestros Clientes.</h5>
                          </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        <img className="background-image-left2" src={colorSharp} alt="Image" />

        </section>
      )
}