import React from 'react';
export class Button extends React.Component {
    render() {
        return (
            <div id="myButtons" class="heads">
                <button className="btn"><i className="fa fa-home"></i> Home</button>
                <button id="menu" className="btn"> Menu</button>
                
            </div>
        );

    }
}