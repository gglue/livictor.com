import {useState, useEffect} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { motion } from 'framer-motion';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
// jsx = React.createClement(), but I just used jsx because of emotion

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
        motionDiv: motion.div,
    };

    const cardVariant = {
        hover: {
            scale: 1.2,
            transition:{
                yoyo: Infinity
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
                //mass: 0.4, damping :8
                delay : 0.2, type : 'spring', stiffness: 125, //when: "beforeChildren",
                //staggerChildren: 5, stagger and when doesn't work for some reason idek
            }
        },
        exit: {
            x: 1250,
            transition: {ease: 'easeInOut'}
        }
    };

    const cardCSS = 
    css`
      @media only screen and (max-width: 320px){
        *{
            font-size: 0.40rem;
        }
      }
      @media only screen and (min-width: 321px){
        *{
            font-size: 0.33rem;
        }
      }

      @media only screen and (min-width: 376px){
        *{
            font-size: 0.50rem;
        }
      }

      @media only screen and (min-width: 376px){
        *{
            font-size: 0.46rem;
        }
      }

      @media only screen and (min-width: 600px){
        *{
            font-size: 0.65rem;
        }
      }
      
      @media only screen and (min-width: 768px){
        *{
            font-size: 0.85rem;
        }
      }
      
      @media only screen and (min-width: 990px){
        *{
            font-size: 1rem;
            color : black;
        }
      }`

    function printRows(){
        const numberOfCards = projects.length;
        const numberOfRows = Math.ceil(numberOfCards / 4);
        const arrayRows = [];
        for (let x = 0; x < numberOfRows; x++){
            arrayRows.push(jsx(Components["row"], {key : x}, printCols()));
        }
        return arrayRows;
    }

    function printCols(){
        const arrayCols = [];
        for (let x = 0; x < 4; x ++){
            if (counter === projects.length) break;
            arrayCols.push(jsx(Components["col"], {key : projects[counter].id, xs :"3"}, printCard()));
        }
        return arrayCols;
    }

    function printCard(){
        return jsx(Components["motionDiv"], {css : cardCSS, variants: cardVariant, initial : "hidden", animate : "visible", whileHover : "hover", exit : "exit"}, 
            jsx(Components["card"], {}, jsx("a", {href : projects[counter].html_url}, printCardDescription())));
    }

    function printCardDescription(){
        return jsx(Components["cardBody"], {}, [
            jsx(Components["cardTitle"], {key : 1}, projects[counter].name),
            jsx(Components["cardText"], {key : 2}, projects[counter].description),
            jsx(Components["cardText"], {key : 3}, projects[counter++].language)
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