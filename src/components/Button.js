import React from 'react';
import buttomImg from '../img/add.png';
import { Link } from 'react-router-dom';

const Button = () => (
    <Link to="/exercise/new">
    <img src={buttomImg} className="Fitness-Add" alt="exercise" />
    </Link>
)

export default Button;