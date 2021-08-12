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
                                <Card.Title><h2>My Contact Info! :)</h2></Card.Title>
                                <Card.Text><a href="tel:647-710-8780">Cellphone: 647-710-8780</a></Card.Text>
                                <Card.Text><a href="mailto:livictor@protonmail.com">E-mail: livictor@protonmail.com</a></Card.Text>
                                <Card.Text><a href="https://steamcommunity.com/id/gglue/">Steam: /id/gglue</a></Card.Text>
                                <Card.Text>Discord: gglue#1312</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Contact;