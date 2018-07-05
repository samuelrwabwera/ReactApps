import React from 'react';
export class Form extends React.Component {
    render() {
        return (
            <div id="form" className="myForm">
                <center>
                <form>
                    <input id="tas" type="text" placeholder="Task" required />
                   

                    <input id="des" type="text" placeholder="Description" required />
                    

                    <input id="tt" type="time" placeholder="Time" required />
                    
                    <center>
                        <button id="box" className="sub">Submit</button>
                        

                    </center>
                </form>
                </center>
            </div>
        );
    }
}
