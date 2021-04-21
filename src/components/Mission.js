import React from 'react'
import { MissionData } from '../data/aboutData'
import './Mission.css'

const Mission = () => {
    let { title, description } = MissionData
    return (
        <div className="mission__section">
            <h1> {title} </h1>
            <p style={{fontWeight: 300}}> {description} </p>
        </div>
    )
};

export default Mission
