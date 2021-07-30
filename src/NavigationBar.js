import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
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
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">Skills</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Personal Projects</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Cooperative Works </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
}
 
export default NavigationBar;