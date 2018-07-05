import createElement from 'react';
export class Button extends React.Component{
render()
{
    return React.createElement('div', { id: "myButtons", className: "heads" }),
    createElement('button', { className: "btn fa fa- home", "Home" }),
    createElement('button', { id:"menu" className: "btn fa fa-bars",} "Menu")
);







class Hello extends React.Component {
    render() {
      return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
  }
  
  ReactDOM.render(
    React.createElement(Hello, {toWhat: 'World'}, null),
    document.getElementById('root')
  );