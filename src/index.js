import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//--------------------------------------------------------------------------
/* import React from 'react'
import ReactDOM from 'react-dom' */

// let h1 = React.createElement('h1',null,'Koenig Solutions')
/* let h1 = React.createElement('h1',{id:'header'},'Koenig Solutions')
ReactDOM.render(h1,document.getElementById('root')) */
/* 
let ul = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "1 lb Salmon"),
  React.createElement("li", null, "1 cup Pine Nuts"),
  React.createElement("li", null, "2 cups Butter Lettuce"),
  React.createElement("li", null, "1 Yellow Squash"),
  React.createElement("li", null, "1/2 cup Olive Oil"),
  React.createElement("li", null, "3 cloves of Garlic")
  )
  ReactDOM.render(ul,document.getElementById('root')) */
  


  //---
/* let section =   React.createElement("section", {id: "baked-salmon"},
React.createElement("h1", null, "Baked Salmon"),
React.createElement("ul", {"className": "ingredients"},
React.createElement("li", null, "1 lb Salmon"),
React.createElement("li", null, "1 cup Pine Nuts"),
React.createElement("li", null, "2 cups Butter Lettuce"),
React.createElement("li", null, "1 Yellow Squash"),
React.createElement("li", null, "1/2 cup Olive Oil"),
React.createElement("li", null, "3 cloves of Garlic")
),
React.createElement("section", {"className": "instructions"},
React.createElement("h2", null, "Cooking Instructions"),
React.createElement("p", null, "Preheat the oven to 350 degrees."),
React.createElement("p", null,
"Spread the olive oil around a glass baking dish."),
React.createElement("p", null, "Add the salmon, garlic, and pine..."),
React.createElement("p", null, "Bake for 15 minutes."),
React.createElement("p", null, "Add the yellow squash and put..."),
React.createElement("p", null, "Remove from oven and let cool for 15 ....")
)
)

ReactDOM.render(section,document.getElementById('root')) */


// Constructing Elements with Data

/* let items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
] */
/* let ul =React.createElement(
  "ul",
  { className: "ingredients" },
  items.map(ingredient =>
      React.createElement("li", null, ingredient)
  )
  ) */

 /*  let ul =React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient,i) =>
        React.createElement("li",{key:i}, ingredient)
    )
    )

  ReactDOM.render(ul,document.getElementById('root'))
 */

// Let's combine both together and remove using react.createElement
   
    // let h1 = React.createElement('h1',null,'Koenig Solutions')
    // ReactDOM.render(h1,document.getElementById('root'))
  
  /*   ReactDOM.render( 
      <h1>Koenig</h1>
    ,document.getElementById('root')); */
 //  Now You might think, without using React.createElement , how is it working
  //Run above line on babel.io
  // see the es5 code


//--------Render Multiple Element 
  /* ReactDOM.render(
    <div>
        <h1>Koenig solutions pvt ltd</h1>
        <p>IT Training Center</p>
    </div>,
    document.getElementById('root')
  )  */

//: Above it is adding extra node to the Dom , check inspect element
//To resolve above problem, we use Fragment
//Fragments let you group a list of children without adding extra nodes to the DOM.

//Code:
      /* ReactDOM.render(
        <React.Fragment>
          <h1>Koenig solutions pvt ltd</h1>
          <p>IT Training Center</p>
        </React.Fragment>,
        document.getElementById('root')
      )  */
   //OR : There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:
/*    ReactDOM.render(
    <>
       <h1>Koenig solutions pvt ltd</h1>
       <p>IT Training Center</p>
    </>,
    document.getElementById('root')
  ) 
 */

/* 
Small Assignment
1) Create a app from scratch
2) Add one h1 element in it :  OTT Platform
3) Add one p element :  List of 5 OTT Platform
4) Add list of 5 OTT Platform using order list : show list

*/  

/* JavaScript Expression in JSX */

/* const companyname = 'Koenig Solutions Pvt Ltd'
ReactDOM.render(
   <>
     <h1>{companyname}</h1>
   <p>IT Training Center</p>
   </>,
   document.getElementById('root')
) */

// Another Example
/* let items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
] 
ReactDOM.render(
  <ul>
    {
      items.map((ingredient,index)=><li key={index}>{ingredient}</li>)
    }
  </ul>,
  document.getElementById('root')
) */