import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const People = (props) => {
    const [person, setPerson] = useState({});
    const [planet, setPlanet] = useState({});
    useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${props.id}/`)
    .then(response => {setPerson(response.data)
        axios.get(response.data.homeworld)
        .then(response => setPlanet(response.data))})
    .catch(() => navigate("/error"))
    }, [props]);
    return (
        <div>
            <h2>{person.name}</h2>
            <h5>Height: <span className="fw-normal">{person.height}</span></h5>
            <h5>Mass: <span className="fw-normal">{person.mass}</span></h5>
            <h5>Hair Color: <span className="fw-normal">{person.hair_color}</span></h5>
            <h5>Eye Color: <span className="fw-normal">{person.eye_color}</span></h5>
            <h5>Gender: <span className="fw-normal">{person.gender}</span></h5>
            <h5>Homeworld: <span className="fw-normal">{planet.name}</span></h5>
        </div>
    );
};

export default People;