import React from 'react';
import ReactDOMClient from 'react-dom/client';

//ReactDOM.render(<div>
//        <h1>Hi!</h1>
//        <h2>ggg</h2>
//    </div>, document.getElementById("app"))

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("MouseOver")

const helpText = "help text!"
const elements = <div className="name">  
        <h1>Hi!</h1>
        <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver}/> 
        <p>{helpText === "help text!" ? "Yes" : "No"}</p>
    </div>

const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(elements)