import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Planets = (props) => {
    const [planet, setPlanet] = useState({});;
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}/`)
        .then(response => setPlanet(response.data))
        .catch(() => navigate("/error"));
    }, [props]);
    return (
        <div>
            <h2>{planet.name}</h2>
            <h5>Climate: <span className="fw-normal">{planet.climate}</span></h5>
            <h5>Terrain: <span className="fw-normal">{planet.terrain}</span></h5>
            <h5>Gravity: <span className="fw-normal">{planet.gravity}</span></h5>
            <h5>Surface: <span className="fw-normal">{planet.surface_water}</span></h5>
            <h5>Population: <span className="fw-normal">{planet.population}</span></h5>
        </div>
    );
};

export default Planets;