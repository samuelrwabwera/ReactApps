import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Components/form.js';
import { Button } from './Components/Button.js';
import './index.css';
//import './bootstrap/css/bootstrap.min.css';

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <div id="myDIV" className="header">
                    <h1 className="Title">My ToDo app APP</h1>
                </div>

                <Button />
                <div>
                    <center>
                        <p>
                            <h3 className="formHead">New task </h3>
                        </p>
                    </center>
                </div>
                <div>
                    <Form />
                </div>
                
            </div>
        );
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
