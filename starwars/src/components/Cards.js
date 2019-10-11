import React, {useState, useEffect} from "react";
import CardBuild from "./CardBuild";
import styled from "styled-components";
import axios from "axios";

const CardGrid = styled.div`
    width: 90%;
    margin: auto;
    padding: 10px;
    background-color: #999;
    border: 1px solid white;
    border-radius: 3px;
    display: flex;
    justify-content: space-evenly;
    align-items: ceter;
    flex-wrap: wrap;
`




export default function Cards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function aFunction() {
            try{
                const axCall = await axios.get("https://swapi.co/api/people")
                setPeople(axCall.data.results)
            }
            catch(err) {
                console.log(err);
            }
        }
        aFunction();
    }, []);
  
    return (
        <CardGrid>
            {people.map((el, i) => {
                return (<CardBuild name={el.name} gender={el.gender} key={i}></CardBuild>)
            })};
        </CardGrid>
    )
}