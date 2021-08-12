import {Container, Row, Col, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function Cooperative(){
    return (
        <nav className="cooperative">
            <Container>
                <Row className = "justify-content-center">
                    <Col xs={12} md={5} className = "my-5">
                        <Card>
                            <Card.Body>
                                <Card.Title><h2>To be worked on eventually :)</h2></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Cooperative; 