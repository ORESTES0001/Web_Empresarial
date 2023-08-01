
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import Carrusel1 from "../Assets/img/APPS1.png";
import Carrusel2 from "../Assets/img/APPS2.png";
import Carrusel3 from "../Assets/img/APPS3.png";

export const APPS  = () => {

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
        <section className='APPS' id='APPS'>
            <Container>
                <Row>
                    <Col>
                    <div className='APPS-bx'>
                        <h1>
                        APLICACIONES EN DESARROLLO
                        </h1>
                        <Carousel responsive={responsive} infinite={true} className='APPS-slider'>
                          <div className='item2'>
                            <img src={Carrusel1} alt='Image'/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h5>VIDEO JUEGO</h5>
                          </div>
                          <div className='item'>
                            <img src={Carrusel2} alt='Image'/>
                            <br/>
                            <h5>UTILIDAD AGRONOMA</h5>
                          </div>
                          <div className='item'>
                            <img src={Carrusel3} alt='Image'/>
                            <br/>
                            <h5>RED SOCIAL</h5>
                          </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>

        </section>
      )
}