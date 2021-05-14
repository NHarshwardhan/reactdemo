import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
// import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Card from './components/Card'
import movieInfo from './components/MovieInfo' 
import Counter from './components/Counter'
import Propsvalidation from './components/PropsValidation'
import Parent from './components/Parent';
import Parentfunctional from './components/ParentFunctional';
import Hookcounter from './components/HookCounter';
import Hookcounterprevstate from './components/HookCounterPrevState';
import Hookobjectstate from './components/HookObjectState';
import Refdemo from './components/RefDemo';
import Apidemo from './components/ApiDemo';
import Useeffectcounttitle from './components/useEffectCountTitle';
import Useeffectcounttitlefunction from './components/useEffectCountTitleFunction'

import Controlledcompo from './components/controlledCompo';
import Uncontrolled from './components/unControlled';

import React,{lazy,Suspense} from 'react'
/* import Clickcounter from './components/HOC/ClickCounter';
import Hovercounter from './components/HOC/HoverCounter'; */

import Optimiziebymemo from './components/OptimizieByMemo';
const ClickCounter = lazy(()=>import('./components/HOC/ClickCounter'))
const Hovercounter = lazy(()=>import('./components/HOC/HoverCounter'))

/* function App() {
  return (
    <div className="App">
       <Greet/>
       <Welcome/>
    </div>
  );
} */

//------------
function App() {
  return (
    <div className="App">
      {/*  <Greet name=" Mike" surname="Tyson">
          <p>This is child Element</p>
       </Greet>

       <Greet name=" John" surname="Cena">
         <button>Action</button>

       </Greet>
       <Greet name=" Peter" surname="Parker"/>
       <Welcome name=" Mike" surname="Tyson"/>
        <Counter/> */}
        {/* <Parent/> */}
        {/* <Parentfunctional/> */}
        {/* <Hookcounter/> */}
        {/* <Hookcounterprevstate/> */}
        {/* <Hookobjectstate/> */}
        {/* <Refdemo/> */}
        {/* <Apidemo/> */}
        {/* <Useeffectcounttitle/> */}
        {/* <Useeffectcounttitlefunction/> */}
        
       {/*   <Clickcounter name="Nishant"/>
         <Hovercounter/> */}
         {/* <Controlledcompo/> */}
         {/* <Uncontrolled/> */}
         <Optimiziebymemo/>
          <Suspense fallback={<h1>Please wait while loading...</h1>}>
              <ClickCounter/>
            <Hovercounter/>
          </Suspense>
{/* 
          <Clickcounter/>
          <Hovercounter/> */}
       

    </div>
  );
}


// Props Netflix Example
 /* function App() {
  return (
    <div class="container">
     <div className="row mt-4">
         <div className="col-md-12">
             <h3 className="text-center"> UPCOMING NETFLIX MOVIE<hr/></h3>
         </div>
     </div>
     <div className="row">
         <div className="col-md-12">
      
     
    <div class="card-deck mt-4">
  <div class="card" style={{boxShadow:'10px 10px 14px gray'}}>
    <img class="card-img-top " src="https://i.pinimg.com/736x/0c/4f/8f/0c4f8fe58a8f06bdd7e63550aa7bf338.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">AVATAR</h5>
      <p class="card-text">NETFLIX  MOVIE </p>
    </div>
    <div class="card-footer bg-white">
      <button className="btn btn-outline-danger">Watch Now</button>
    </div>
  </div>
  <div class="card" style={{boxShadow:'10px 10px 14px gray'}}>
    <img class="card-img-top " src="https://m.media-amazon.com/images/M/MV5BNzRjMjhmZmUtYjRhNS00YjlmLWI4MzUtMDFhM2E0MjAyZGRjXkEyXkFqcGdeQXVyMTEwNDM0NTI2._V1_.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">THANDAV</h5>
      <p class="card-text">NETFLIX  MOVIE</p>
    </div>
    <div class="card-footer bg-white">
      <button className="btn btn-outline-danger">Watch Now</button>
    </div>
  </div>
  <div class="card" style={{boxShadow:'10px 10px 14px gray'}}>
    <img class="card-img-top " src="https://i.insider.com/5ca3d2b892c8866e8b4618d9?width=750&format=jpeg&auto=webp" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">AVENGERS ENDGAME</h5>
      <p class="card-text">NETFLIX  MOVIE</p>
    </div>
    <div class="card-footer bg-white">
    <button className="btn btn-outline-danger">Watch Now</button>
    </div>
  </div>
  <div class="card" style={{boxShadow:'10px 10px 14px gray'}}>
    <img class="card-img-top " src="https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY1200_CR105,0,630,1200_AL_.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">IRON MAN 3</h5>
      <p class="card-text">NETFLIX  MOVIE</p>
    </div>
    <div class="card-footer bg-white">
      <button className="btn btn-outline-danger">Watch Now</button>
    </div>
  </div>
</div>
</div>
      
      </div>
     </div>
  );
} */

// After Creating Card Component, First Import and then use
/* function App() {
  return (
    <div class="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h3 className="text-center">
            {" "}
            UPCOMING NETFLIX MOVIE
            <hr />
          </h3>
        </div>
      </div>
     
      <div className="row">
        <div className="col-md-12">
            <div class="card-deck mt-4">
              <Card
               imgSrc="https://i.pinimg.com/736x/0c/4f/8f/0c4f8fe58a8f06bdd7e63550aa7bf338.jpg"
               title="AVATAR"
               text="NETFLIX MOVIE"
              />  
             <Card
               imgSrc="https://m.media-amazon.com/images/M/MV5BNzRjMjhmZmUtYjRhNS00YjlmLWI4MzUtMDFhM2E0MjAyZGRjXkEyXkFqcGdeQXVyMTEwNDM0NTI2._V1_.jpg"
               title="THANDAV"
               text="NETFLIX MOVIE"
              /> 
              <Card
               imgSrc="https://i.insider.com/5ca3d2b892c8866e8b4618d9?width=750&format=jpeg&auto=webp"
               title="AVENGER ENDGAME"
               text="NETFLIX MOVIE"
              /> 
              <Card
               imgSrc="https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY1200_CR105,0,630,1200_AL_.jpg"
               title="IRON MAN 3"
               text="NETFLIX MOVIE"
              /> 
           </div>
        </div>
      </div>
      
      </div> //end of container
  );
} */



// After creating seperate JS File
/* function App() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h3 className="text-center">
            {" "}
            UPCOMING NETFLIX MOVIE
            <hr />
          </h3>
        </div>
      </div>
     
      <div className="row">
        <div className="col-md-12">
            <div className="card-deck mt-4">
            {
              movieInfo.map((movieDetails,index)=>{
                return <Card
                    imgSrc={movieDetails.imgSrc}
                    // title={movieDetails.title}
                    text={movieDetails.text}
                    key={index}
              />  
              })
            }
                        
           </div>
        </div>
        
      </div>
      
  

      </div> //end of container
  );
} */
export default App;


