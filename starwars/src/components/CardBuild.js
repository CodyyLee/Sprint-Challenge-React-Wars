import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 200px;
    height: 200px;
    padding: 10px;
    margin: 10px;
    background-color: #333;
    color: white;
    border: 1px solid white;
    border-radius: 3px;
`;

export default function CardBuild(props) {
    
    return (
        <Card>
            <h1>Name: {props.name}</h1>
            <h3>Gender: {props.gender}</h3>
        </Card>
    )
}