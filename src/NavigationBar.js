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
                            <Nav.Link ><Link to ="/">Home</Link></Nav.Link>
                            <Nav.Link ><Link to ="/skills">Skills</Link></Nav.Link>
                            <Nav.Link ><Link to ="/contact">Contact</Link></Nav.Link>
                            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to ="/projects">Personal Projects</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to ="/cooperative">Cooperative Works</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
}
 
export default NavigationBar;