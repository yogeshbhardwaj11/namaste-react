import React from "react";
import ReactDOM from "react-dom/client";

const titleText = "Welcome to React";

// React Function Component
// React Component is the normal javascript function which returns jsx expression
// jsx - html-like or xml-like syntax inside javascript
// jsx => React.createElement => React Element => html
const TitleComponent = () => {
    // Any javascript expression can be executed within the {} inside Component
    return(
        <h1>
            {titleText}
        </h1>

    );
}

// React Element syntax for single line
// const titleElement = <h1>{titleText}/h1>;

// React Element syntax for multiple lines.
const titleElement = (
    // <h1>
    //     {titleText}
    // </h1>

    // {TitleComponent()}
    // <TitleComponent></TitleComponent>
    <TitleComponent />
)

// React Component can be render inside React Element
// React Component can be render inside another React Component
// React Element can be rendered inside another React Element
// React Element can be rendered inside another React Component
const ContentComponent = () => {
    return(
        <div>
            <TitleComponent />
            <span>Welcome to React!</span>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContentComponent />);