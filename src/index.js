import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Components/form.js';
import { Button } from './Components/Button.js';
import './index.css';
//import './bootstrap/css/bootstrap.min.css';
class MyApp extends React.Component {
    render() {
        return (
            createElement('div', {},
                createElement('div', { id: "myDiv", className: "header" },
                    createElement('h1', { className: "Title" }, "My TODO App"),
                ),
                createElement(Button, {}),
                createElement('div', {},
                    createElement('center', {},
                        createElement('label', {},
                            this.createDiv("formHead", 4340), "New Task"
                    )
                )
            ),
            createElement('div', {},
                createElement(Form, {}),
            )
           )
        )
    }
        createDiv(className, ref) {
        return createElement("h2", { className, ref });
    }
}
ReactDOM.render(
    createElement(MyApp),
    document.getElementById('root')
);
