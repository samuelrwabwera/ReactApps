import React from 'react';


export class Button extends React.Component {
    render() {
        return (
            React.createElement('div', { ref: "myButtons", className: "heads" },
            React.createElement('button', { className: "btn fa fa-home" }, "Home"),
            React.createElement('button', { ref: "menu", className: "btn fa fa-bars" }, "Menu")


            )
        )
    }
} 























































