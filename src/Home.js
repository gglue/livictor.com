import {Container, Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { formatDistanceStrict } from 'date-fns';
import {motion} from 'framer-motion';
import "bootstrap/dist/css/bootstrap.css";

function Home() {
    
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
                        <motion.div variants={cardVariant} initial = "hidden" animate= "visible" exit="exit">
                            <Card>
                                <Card.Body>
                                    <Card.Title><h2>Hi! My name is Victor :)</h2></Card.Title>
                                    <Card.Text>I'm {formatDistanceStrict(new Date(), new Date("12/16/00"))} old and a student attending Western University for Computer Science! I am an avid fan
                                        of video games and aspire to start my own video game development company one day!</Card.Text>
                                    <Card.Text>Feel free to check out my <b><Link to="/projects">{numberProjects} Personal Projects </Link></b>
                                    I developed while on my coding journey!</Card.Text>
                                    <Card.Text>Want to know more about me? Want to work together? Feel free to <b><Link to ="/contact">Contact Me!</Link></b></Card.Text>
                                    <Card.Text>Website last updated: {lastUpdated.substring(0,10)}</Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Home;