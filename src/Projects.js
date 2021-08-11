import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function Projects(){
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    var counter = 0;
    
    useEffect(() => {
        const abortCont = new AbortController();

        fetch("https://api.github.com/users/gglue/repos", {signal: abortCont.signal})
        .then(res =>{
            return res.json();
        })
        .then(data => {
            const newData = data.filter(function (el){
                return el.name !== "gglue" &&
                el.name !== "gglue.github.io";
            });
            setProjects(newData);
            setLoading(false);
        })
        .catch((err) => {
            if (err.name !== "AbortError"){
                console.log(err);
                setLoading(false);
            }
        })

        return () => abortCont.abort();
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
            arrayRows.push(React.createElement(Components["row"], {key : x}, printCols()));
        }
        return arrayRows;
    }

    function printCols(){
        const arrayCols = [];
        for (let x = 0; x < 4; x ++){
            if (counter === projects.length) break;
            arrayCols.push(React.createElement(Components["col"], {key : projects[counter].id, xs :"3"}, printCard()));
        }
        return arrayCols;
    }

    function printCard(){
        return React.createElement(Components["card"], {}, React.createElement("a", {href : projects[counter].html_url}, printCardDescription()));
    }

    function printCardDescription(){
        return React.createElement(Components["cardBody"], {}, [
            React.createElement(Components["cardTitle"], {key : 1}, projects[counter].name),
            React.createElement(Components["cardText"], {key : 2}, projects[counter].description),
            React.createElement(Components["cardText"], {key : 3}, projects[counter++].language)
        ]);
    }

    return (
        <nav className = "projects">
            <Container>
                {loading ? <div>Loading :)</div> : printRows()}
            </Container>
        </nav>
    );
}

export default Projects;