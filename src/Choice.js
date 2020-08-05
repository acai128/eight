import React from "react"

function choice(answers) {
    let random = Math.floor(Math.random() * answers.length);
        return answers[random]; 
  }

export default choice 