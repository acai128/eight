import React from "react"; 

function Choice(answers) {
    let random = Math.floor(Math.random() * answers.length);
        return answers[random]; 
  }

export default Choice 
