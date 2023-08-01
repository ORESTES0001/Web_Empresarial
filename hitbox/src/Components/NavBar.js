import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assets/img/logo.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : "bg-body-tertiary"}>
      <Container>
        <Navbar.Brand href="#Home">
            <img src={logo} alt="HITBOX" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Home" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link href="#About_us" className={activeLink === 'About_us' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('About_us')}>Acerca de Nosotros</Nav.Link>
            <Nav.Link href="#Service" className={activeLink === 'Service' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Service')}>Servicios</Nav.Link>
            <Nav.Link href="#Processes" className={activeLink === 'Processes' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Processes')}>Procesos de trabajo</Nav.Link>
            <Nav.Link href="#Contact_us" className={activeLink === 'Contact_us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact_us')}>Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;