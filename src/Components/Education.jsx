import React from "react";

import image from "../images/studing.webp";
const imageAltText = "Men in a desktop laptop, computers and monitors";

const sectionStyle = {
    backgroundColor: "#4f577e",
    color: "#fff",
    padding: "5em",
    display: "flex",
    justifyContent: "space-between", // Alinha os elementos à esquerda e à direita
};

const Education = () => {
    return(
        <section style={sectionStyle} id="education">
            <div className="education-content">
                <h2>Education</h2><br />
                <div className="education-item">
                    <h3>University of São Paulo (USP)</h3>
                    Bachelor of Science in Information Systems<br />
                    Studied from 2021 to 2024
                </div><br />
                <div className="education-item">
                    <h3>ETEC Jardim Angela</h3>
                    Technical Degree in Informatics<br />
                    Studied from 2016 to 2019
                </div><br />
                <div className="education-item">
                    <h3>SAGA - School of Art, Games and Animation</h3>
                    Computer Graphics<br />
                    Studied from 2017 to 2019
                </div><br />
                <div className="education-item">
                    <h3>FIAP</h3>
                    Leadership Communication | Complete in 2021<br />
                    DevOps & Agile Culture | Complete in 2023<br />
                    Cybersecurity | 
                    Complete in 2024
                </div>
            </div>
            <img src={image} alt={imageAltText} style={{ float: "right", maxWidth: "50%" }} />
        </section>
    )
}

export default Education;

