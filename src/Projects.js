import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.css";
import {motion} from 'framer-motion';
import axios from "axios";

function Projects(){
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get("https://api.github.com/users/gglue/repos")
            .then(res => {
                const newData = res.data.filter(function (el){
                    return el.name !== "gglue" &&
                        el.name !== "gglue.github.io";
                });
                setProjects(newData);
                setLoading(false);
            })
      }, []);

    const cardVariant = {
        hover: {
            scale: 1.2,
            transition:{
                duration: 0.25,
                repeat: Infinity,
                repeatType: "reverse"
            }
        },
        hidden : {
            x: -1250,
            opacity : 0,
        },
        visible : {
            x: 0,
            opacity : 1,
            transition : {
                delay : 0.2, type : 'spring', stiffness: 125, //when: "beforeChildren",
            }
        },
        exit: {
            x: 1250,
            transition: {ease: 'easeInOut'}
        }
    };

    function printProjects(){
        let counter = 0;
        return(
            projects.map(project => (
                <motion.div key={counter++} variants={cardVariant} initial="hidden" animate="visible" exit="exit" style={{marginBottom : 10, marginTop : 10}}>
                    <a href={project.html_url}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Card.Text>
                                    {project.language + " "}
                                    {
                                    project.topics.map(topic => (
                                        topic[0].toUpperCase() + topic.slice(1) + " "
                                    ))
                                }</Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </motion.div>
            ))
        )
    }
    return (
        <nav className = "projects">
            <Container>
                {loading ? <div>Loading :)</div> : printProjects()}
            </Container>
        </nav>
    );
}

export default Projects;