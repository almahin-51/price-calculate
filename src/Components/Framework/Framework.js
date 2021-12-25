import React from "react";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Framework = () => {
  return (
    <div className="home">
      <div className="header-top">
        <FontAwesomeIcon icon={faEllipsisH} />
        <p>
          WANT TO DISCUSS YOUR PROJECT IN DETAIL?{" "}
          <span>SCHEDULE A CALL HERE</span>
        </p>
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>

      <div className="details">
        <div className="category">
          <h2>I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)</h2>
          <div className="card">
            <h4>Python</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              molestias in animi esse quos accusamus, earum omnis sit! Voluptas,
              quidem.
            </p>
          </div>
          <div className="card">
            <h4>Wordpress</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              molestias in animi esse quos accusamus, earum omnis sit! Voluptas,
              quidem.
            </p>
          </div>
          <div className="card">
            <h4>Php Laravel</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              molestias in animi esse quos accusamus, earum omnis sit! Voluptas,
              quidem.
            </p>
          </div>
          <div className="card">
            <h4>Php (From Scratch)</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              molestias in animi esse quos accusamus, earum omnis sit! Voluptas,
              quidem.
            </p>
          </div>
          <div className="card">
            <h4>Kajabi</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              molestias in animi esse quos accusamus, earum omnis sit! Voluptas,
              quidem.
            </p>
          </div>
        </div>

        <div className="line"></div>
        <div className="pricing">
          <p>
            PLEASE INPUT ALL THE FIELDS TO <br /> SHOW ESTIMATED PRICE
          </p>
        </div>
      </div>
      <div className="footer">
        <button className="prev">Previous</button>
        <div className="progress-container">
          <div className="progress"></div>
        </div>
        <button className="next active">Next</button>
      </div>
    </div>
  );
};

export default Framework;
