import React from "react";
import PropTypes from 'prop-types';
export default function Card(props) {
  
  return (
    /* 
      <div class="card" style={{ boxShadow: "10px 10px 14px gray" }}>
        <img
          class="card-img-top "
          src="https://i.pinimg.com/736x/0c/4f/8f/0c4f8fe58a8f06bdd7e63550aa7bf338.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">AVATAR</h5>
          <p class="card-text">NETFLIX MOVIE </p>
        </div>
        <div class="card-footer bg-white">
          <button className="btn btn-outline-danger">Watch Now</button>
        </div>
      </div> */

    //After recieve props    
    <div className="card" style={{ boxShadow: "10px 10px 14px gray" }}>
    <img
      className="card-img-top "
      src={props.imgSrc}
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text} </p>
    </div>
    <div className="card-footer bg-white">
      <button className="btn btn-outline-danger">Watch Now</button>
    </div>
  </div>

   
  );
            //No Need for below code ,its same only content is different

            {/* <div class="card" style={{ boxShadow: "10px 10px 14px gray" }}>
              <img
                class="card-img-top "
                src="https://m.media-amazon.com/images/M/MV5BNzRjMjhmZmUtYjRhNS00YjlmLWI4MzUtMDFhM2E0MjAyZGRjXkEyXkFqcGdeQXVyMTEwNDM0NTI2._V1_.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">THANDAV</h5>
                <p class="card-text">NETFLIX MOVIE</p>
              </div>
              <div class="card-footer bg-white">
                <button className="btn btn-outline-danger">Watch Now</button>
              </div>
            </div>
            <div class="card" style={{ boxShadow: "10px 10px 14px gray" }}>
              <img
                class="card-img-top "
                src="https://i.insider.com/5ca3d2b892c8866e8b4618d9?width=750&format=jpeg&auto=webp"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">AVENGERS ENDGAME</h5>
                <p class="card-text">NETFLIX MOVIE</p>
              </div>
              <div class="card-footer bg-white">
                <button className="btn btn-outline-danger">Watch Now</button>
              </div>
            </div>
            <div class="card" style={{ boxShadow: "10px 10px 14px gray" }}>
              <img
                class="card-img-top "
                src="https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY1200_CR105,0,630,1200_AL_.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">IRON MAN 3</h5>
                <p class="card-text">NETFLIX MOVIE</p>
              </div>
              <div class="card-footer bg-white">
                <button className="btn btn-outline-danger">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  
}

Card.propTypes={
  title:PropTypes.string.isRequired,
  text:PropTypes.string

}

// Custom Validation
Card.propTypes={
  title:(props,propsName)=>{
    if(!(propsName in props)){
      return new Error(`Missing ${propsName}`)
    }
    else if(props[propsName].length <6){
      return new Error(`${propsName} is too short atleast more than 6 chracter`)
    }
  }
}