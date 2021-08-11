import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
function NavigationBar() {
    return (  
        <nav className="navigationBar">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand>livictor.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to ="/" className ="nav-link">Home</Link>
                            <Link to ="/skills" className ="nav-link">Skills</Link>
                            <Link to ="/contact" className ="nav-link">Contact</Link>
                            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                                <Link to ="/projects" className ="dropdown-item">Personal Projects</Link>
                                <Link to ="/cooperative" className ="dropdown-item">Cooperative Works</Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
}
 
export default NavigationBar;