import {Container, Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
function Home() {
    const [numberProjects, changeNumber] = useState(0);
    const [lastUpdated, changeDate] = useState("can't fetch it");
    useEffect(() => {
        const abortCont = new AbortController();

        fetch("https://api.github.com/users/gglue/repos")
        .then(res =>{
            return res.json();
        })
        .then(data => {
            changeNumber(data.length - 2);
            const tempData = data.filter(function (el) {
                return el.name === "livictor.com";
            });
            changeDate(tempData[0].updated_at);
        })
        .catch((err) => {
            if (err.name !== "AbortError"){
                console.log(err);
            }
        })

        return () => abortCont.abort();
      }, []);

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
                                    I have been honing my <b><Link to = "/skills">Skills!</Link></b></Card.Text>
                                <Card.Text>I don't think I'll update this site very much, most of it is
                                is automated, but feel free to check out my <b><Link to="/projects">{numberProjects} Personal Projects </Link></b>
                                I made while bored, or one of my <b><Link to ="/coop">0 Cooperative Works</Link></b> that I worked with friends, or as a commission.</Card.Text>
                                <Card.Text>Want to know more about me? Want to work together? Feel free to <b><Link to ="/contact">Contact Me!</Link></b></Card.Text>
                                <Card.Text>Website last updated: {lastUpdated.substring(0,10)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Home;