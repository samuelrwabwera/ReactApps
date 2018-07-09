import React, { createElement } from 'react';
export class Form extends React.Component {
    render() {
        return (
            createElement('div', { className: 'myForm' },
                createElement('center', null,
                    createElement('form', null,

        createElement('input', { id: "tas", placeholder: "Task", required: true }, ),
        createElement('input', { id: "des", placeholder: "Description", required: true }, ),
        createElement('input', { id: "tt",type:"time", placeholder: "Time", required: true }, ),
        createElement('center', null,
        createElement('button', { id: "box", className: "sub" }, "Submit")
                        )
                    )

                )
            )
        )
    }
}