import React, {useState, useEffect, useRef} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function Projects(){
    const [projects, setProjects] = useState(null);
    var counter = 0;
    const tester = useRef(null);
    
    useEffect(() => {
        fetch("https://api.github.com/users/gglue/repos")
        .then(res =>{
            return res.json();
        })
        .then(data => {
            setProjects(data);
        })
        .catch((err) => {
            console.log(err);
        })
      }, []);

    const Components = {
        card: Card,
        row: Row,
        col: Col,
        cardBody : Card.Body,
        cardTitle: Card.Title,
        cardText: Card.Text,
    };

    function printRows(){
        const numberOfCards = projects.length;
        const numberOfRows = Math.ceil(numberOfCards / 4);
        const arrayRows = [];
        for (let x = 0; x < numberOfRows; x++){
            arrayRows.push(React.createElement(Components["row"], {}, printCols()));
            arrayRows.push(React.createElement())
        }
        return arrayRows;
    }

    function printCols(){
        const arrayCols = [];
        for (let x = 0; x < 4; x ++){
            if (counter === 9) break;
            arrayCols.push(React.createElement(Components["col"], {xs :"3"}, printCard()));
        }
        return arrayCols;
    }

    function printCard(){
        return React.createElement(Components["card"], {}, printCardDescription());
    }

    function printCardDescription(){
        return React.createElement(Components["cardBody"], {}, [
            React.createElement(Components["cardTitle"], {}, projects[counter].name),
            React.createElement(Components["cardText"], {}, projects[counter].description),
            React.createElement(Components["cardText"], {}, projects[counter++].created_at)
        ]);
    }

    return (
        <nav className = "projects">
            <Container>
              {printRows()}
            </Container>
        </nav>
    );
}

export default Projects;