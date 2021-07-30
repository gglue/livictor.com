import {Container, Row, Col, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
function Home() {
    return (
        <nav className="home">
            <Container>
                <Row className = "justify-content-center">
                    <Col xs={12} md={5} className = "my-5">
                        <Card>
                            <Card.Body>
                                <Card.Title><h2>Hi! My name is Victor :)</h2></Card.Title>
                                <Card.Text>I'm a 20 year old Computer Science student attending Western University! I am an avid fan
                                    of RPGs and aspire to start my own video game development company one day! To achieve my dreams,
                                    I have been honing my <b><a href="#skills">Skills!</a></b></Card.Text>
                                <Card.Text>I don't think I'll update this site very much, most of it is
                                is automated, but feel free to check out my <b><a href="#personal">X Personal Projects </a></b>
                                I made while bored, or one of my <b><a href="#coop">Y Cooperative Works</a></b> that I worked with friends, or as a commission.</Card.Text>
                                <Card.Text>Want to know more about me? Want to work together? Well, free free to <b><a href="#contact">Contact Me!</a></b></Card.Text>
                                <Card.Text>Website last manually updated: July-29-2021</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Home;