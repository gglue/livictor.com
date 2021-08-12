import {Container, Row, Col, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function NotFound(){
    return (
        <nav className="notFound">
            <Container>
                <Row className = "justify-content-center">
                    <Col xs={12} md={5} className = "my-5">
                        <Card>
                            <Card.Body>
                                <Card.Title><h2>The page you're requesting doesn't exist :)</h2></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default NotFound;