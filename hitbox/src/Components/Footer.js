import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./Mail";
import RedSocial1 from '../Assets/img/RedSocial1.png';
import RedSocial2 from '../Assets/img/RedSocial2.png';
import RedSocial3 from '../Assets/img/RedSocial3.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={RedSocial1} alt="Icon" /> </a>
              <a href="#"><img src={RedSocial2} alt="Icon" /> </a>
              <a href="#"><img src={RedSocial3} alt="Icon" /> </a>
            </div>
            <div className="social-icon">
                <h3>Soporte</h3>
              <a href="#">Preguntas frecuentes </a> <br/>
              <a href="#">Como trabajamos </a><br/>
              <a href="#">Que ofrecemos  </a><br/>
              <a href="#">Contacto  </a><br/>
              <a href="#">Reportar  </a><br/>
            </div> 
            <div className="social-icon">
                <h3>Contactanos</h3>
              <a href="https://api.whatsapp.com/send?phone=%2B50588201558&data=ARCS4D_tx02iWpnwsji0i6LMQHo8sIoEnqNoDqeS0E6cJSeluWIE_ZP1_hYj_CRWeZTTsutTYiQdSUCGFX1OOzPJQvQzlMvFMVk5d-CiZtmi1OgiqEMtQ3VJu67W1bKuwIouOkxdSCev54vWZF1p9Ib8EQ&source=FB_Page&app=facebook&entry_point=page_cta ">+505 88201558 </a> <br/>
              <a href="https://mail.google.com/mail/u/0/#inbox">HITBOXNIC@gmail.com </a><br/>
              <a href="#">NICARAGUA   </a><br/>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}