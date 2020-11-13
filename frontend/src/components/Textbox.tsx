import { resolve } from "dns";
import React, { Component } from "react"
import styled from "styled-components"

const StyledTextBox = styled.textarea`
width: 100%;
height: 150px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
font-size: 16px;
resize: none;
`;

class TextBox extends Component {
state = {
    userInput: "",
    returnedAnalysis: {}
}

setInputState = (input) => {
    return new Promise((resolve, reject) => {
        resolve(this.setState({userInput: input}))
    })
   
}

setAnalysisState = (input) => {
    this.setState({returnedAnalysis: input})
}

// fetch("/textAnalysis", {method: "POST"})



talkToServer = () => {
    let input = JSON.stringify(this.state.userInput)
    console.log(input)
    const requestOptions = {
        method: "POST",
        body: input,
        headers: {"Content-Type": "application/json"}
    }

    

    fetch("/textAnalysis", requestOptions).then((response) => {
        return response.json()
    }).then((body)=> {
        this.setAnalysisState(body)
    })
}

handleInput = (event) => {
    this.setInputState(event.target.value).then(this.talkToServer)
}

render() {
return (
    <div>
        <StyledTextBox onChange={this.handleInput}/>
    </div>
)
}
}
export default TextBox