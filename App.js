import React from "react" 
import ReactDOM from "react-dom/client"

//React.createElement => Object => HTMLElement(render)

//react element is an object at the end of the day

const heading = React.createElement(
    "h1", 
    {id:"heading"},
    "Nmaste React 🚀"
);
console.log(heading);

//react and JSX are different, we can write react without JSX also. JSX makes developer's life easy

//JSX is a aconvention where we merge HTML and JS together

//JSX - HTML-like or XML-like syntax

//jsxHeading is a react element

//JS engine understands all versions of Ecma script ES6, so it doesn't understand JSX
//this code is transpiled(done by PARCEL) before it goes to the JS engine, js engines recieves the code that it understands

const jsxHeading = <h1 id="heading"> Namaste React using JSX 🌉</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(jsxHeading);

root.render(jsxHeading);





































/* 

<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands)



const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'This is Namaste React 🚀'),
    React.createElement('h2', {}, "I'm h2 Tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm h1 Tag"),
    React.createElement('h2', {}, "I'm h2 Tag"),
  ]),
]);

// JSX

console.log(parent);

// const heading = React.createElement(
//   'h1',
//   { id: 'heading', className: 'head' },
//   'Hello World from React!'
// ); // It's the job of Core React to create an element i.e, heading in this case

// React Element is normal JavaScript Object{}

// console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById('root')); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.

// root.render(heading);
root.render(parent);

// In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
*/