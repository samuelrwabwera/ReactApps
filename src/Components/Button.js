import React from 'react';


export class Button extends React.Component {
    render() {
        return (
            React.createElement('div', { id: "myButtons", className: "heads" },
                React.createElement('button', { className: "btn fa fa-home" }, "Home"),
                React.createElement('button', { id: "menu", className: "btn fa fa-bars" }, "Menu")


            )
        )
    }
} 























































