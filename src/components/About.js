import React from 'react'
import { data } from '../data/aboutData'
import './About.css'

const About = () => {
    let { title, description } = data;

    return (
        <React.Fragment>
            <div id="about" className="about__background">
                <h1>{title}</h1>
                <NewLineText desc={description} />
            </div>
        </React.Fragment>
    );
};

const NewLineText = (props) => {
    const text = props.desc;
    const newText = text.split('\n').map(str => <p style={{fontWeight: 600}} className="about__desc"> {str} </p>)

    return newText;
};

export default About;   
