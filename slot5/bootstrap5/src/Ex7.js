import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App7.css';


function ExerciseCards() {
  return (
    <div>
      {/* Header */}
      <div className="  text-center  fs-3 my-4">
        Cards Columns
      </div>

      {/* Cards Grid */}
      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card card-blue card-height text-white text-center">
              <img src="tải xuống.jpg" className="card-img-top img-fluid custom-img mx-auto" alt="Car" />
              <div className="card-body">
                <p className="card-text">Some text inside the first card</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-yellow card-height text-dark text-center">
              <img src="tải xuống.jpg" className="card-img-top img-fluid custom-img mx-auto" alt="Car" />
              <div className="card-body">
                <p className="card-text">Some text inside the second card</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-red card-height text-white text-center">
              <img src="tải xuống.jpg" className="card-img-top img-fluid custom-img mx-auto" alt="Car" />
              <div className="card-body">
                <p className="card-text">Some text inside the third card</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default ExerciseCards;
