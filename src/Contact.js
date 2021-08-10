import {Container, Row, Col, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
function Contact() {
    return (
        <nav className="contact">
            <Container>
                <Row className = "justify-content-center">
                    <Col xs={12} md={5} className = "my-5">
                        <Card>
                            <Card.Body>
                                <Card.Title><h2>Hi! This is my contact info! :)</h2></Card.Title>
                                <Card.Text>647-710-8780</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Contact;