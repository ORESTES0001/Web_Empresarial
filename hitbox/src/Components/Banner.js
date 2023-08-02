import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Assets/img/Header_Img.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "HITBOX", "HITBOX", "HITBOX" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt="HeaderImg"/>
          </Col>
          <Col xs={12} md={6} xl={7}>
              <div className="Bannerr">
                <h1>{`Bienvenidos a `}</h1>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "HITBOX", "HITBOX", "HITBOX" ]'><span className="wrap">{text}</span></span></h1>
                  <button onClick={() => console.log('connect')}>¿Quienes Somos? </button>
              </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}