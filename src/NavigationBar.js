import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import "bootstrap/dist/css/bootstrap.css";


function NavigationBar() {
    
    const naviVariant = {
        hidden: {
            y: -250,
        },
        visible: {
            y: 0,
            transition : {
                //mass: 0.4, damping :8
                delay : 0.2, type : 'spring', stiffness: 125, //when: "beforeChildren",
                //staggerChildren: 5, stagger and when doesn't work for some reason idek
            }
        }
    }
    
    const buttonVariant = {
        hover: {
            scale: 1.2,
            transition:{
                yoyo: Infinity
            }
        },
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition : {delay : 1}
        }
    }

    return (  
        <nav className="navigationBar">
            <motion.div variants={naviVariant} initial = "hidden" animate= "visible">
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand>livictor.com</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <motion.div variants={buttonVariant} whileHover = "hover" initial = "hidden" animate= "visible">
                                    <NavLink exact to ="/" activeClassName="selected" activeStyle={{color: "white", background: "black"}} className ="nav-link">Home</NavLink>
                                </motion.div>
                                <motion.div variants={buttonVariant} initial = "hidden" animate= "visible" whileHover = "hover">
                                    <NavLink to ="/projects" activeClassName="selected" activeStyle={{color: "white", background: "black"}} className ="nav-link">Projects</NavLink>
                                </motion.div>
                                <motion.div variants={buttonVariant} whileHover = "hover">
                                    <NavLink to ="/cooperative" activeClassName="selected" activeStyle={{color: "white", background: "black"}} className ="nav-link">Collab</NavLink>
                                </motion.div>
                                <motion.div variants={buttonVariant} whileHover = "hover" initial = "hidden" animate= "visible">
                                    <NavLink to ="/contact" activeClassName="selected" activeStyle={{color: "white", background: "black"}} className ="nav-link">Contact</NavLink>
                                </motion.div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </motion.div>
        </nav>
    );
}
 
export default NavigationBar;