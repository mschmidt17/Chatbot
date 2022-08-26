import React from "react";
import "./CSS/responseOptions.css";



const ResponseOptions = (props) => {
    const options = [
        { 
            text: "Sobre mi", 
            handler: props.actionProvider.handleSobreMi, 
            id: 1 },
        { 
            text: "Proyectos", 
            handler: props.actionProvider.handlePortfolio,
            id: 2 
        },
        { 
            text: "Contacto", 
            handler: props.actionProvider.handleContacto, 
            id: 3
        },
    ];
    
    const optionsMarkup = options.map((option) => (
        <button
          className="learning"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
    ));
    
    return (
        <div className="container"> {optionsMarkup} </div>
    );
};

export default ResponseOptions;