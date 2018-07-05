import React from 'react';
export class Form extends React.Component {
    render() {
        return (
            <div id="form" className="myForm">
                <center>
                <form>
                    <input id="tas" type="text" placeholder="Task" required />
                    <br></br>
                    <br></br>
                    <br></br>

                    <input id="des" type="text" placeholder="Description" required />
                    <br></br>
                    <br></br>
                    <br></br>

                    <input id="tt" type="time" placeholder="Time" required />
                    <br></br>
                    <br></br>
                    <br></br>
                    <center>
                        <button id="box" className="sub">Submit</button>
                        

                    </center>
                </form>
                </center>
            </div>
        );
    }
}
