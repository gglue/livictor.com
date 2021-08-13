import {Container, Row, Col, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import {motion} from 'framer-motion';


function Cooperative(){
    
    const cardVariant = {
        hidden : {
            x: -1250
        },
        visible : {
            x: 0,
            transition : {
                //mass: 0.4, damping :8
                delay : 0.2, type : 'spring', stiffness: 125, //when: "beforeChildren",
                //staggerChildren: 5, stagger and when doesn't work for some reason idek
            }
        },
        exit: {
            x: 1250,
            transition: {ease: 'easeInOut'}
        }
    }

    return (
        <nav className="cooperative">
            <Container>
                <Row className = "justify-content-center">
                    <Col xs={12} md={5} className = "my-5">
                        <motion.div variants={cardVariant} initial = "hidden" animate= "visible" exit= "exit">
                            <Card>
                                <Card.Body>
                                    <Card.Title><h2>To be worked on eventually :)</h2></Card.Title>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Cooperative; 