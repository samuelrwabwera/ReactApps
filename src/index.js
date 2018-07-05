import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Components/form.js';
import { Button } from './Components/Button.js';
import './index.css';
//import './bootstrap/css/bootstrap.min.css';
class MyApp extends React.Component {
    render() {
        return (
            createElement('div', null,
                createElement('div', { id: "myDiv", className: "header" },
                    createElement('hi', { className: "Title" }, "My TODO App"),
                ),
                <Button />,
                createElement('div', {},
                    createElement('center', {},
                        createElement('p', {},
                            createElement('h2', { className: "formHead" }, "New task"),
                        )
                    )
                ),
                createElement('div', {},
                    <Form />,
                )
            )
        )
    }
}
ReactDOM.render(
    createElement(MyApp, null, null),
    document.getElementById('root')
);
