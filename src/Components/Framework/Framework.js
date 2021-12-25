import React, { useState } from "react";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Framework = () => {
  const [width, setWidth] = useState(100 / 3);
  const [Next, setNext] = useState(false);
  const [Prev, setPrev] = useState(true);

  const cards = document.querySelectorAll(".card");
  console.log(cards.length);

  const handleNext = () => {
    const newWidth = width + 100 / 3;
    setWidth(newWidth);
    setPrev(false);
    if (width > 66.66) {
      setNext(true);
    }
  };

  const handlePrev = () => {
    const newWidth = width - 100 / 3;
    setWidth(newWidth);
    setNext(false);
    if (width < (100 / 3) * 2) {
      setPrev(true);
    }
  };

  return (
    <div className="home">
      <div className="header-top">
        <FontAwesomeIcon icon={faEllipsisH} />
        <p>
          WANT TO DISCUSS YOUR PROJECT IN DETAIL?
          <span> SCHEDULE A CALL HERE</span>
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

          <div className="footer">
            <button
              className="btn prev"
              onClick={handlePrev}
              id="prev"
              disabled={Prev}
            >
              Previous
            </button>
            <div className="progress-container">
              <div
                className="progress"
                id="progress"
                style={{ width: `${width}%` }}
              ></div>
            </div>
            <button
              className="btn next"
              id="next"
              onClick={handleNext}
              disabled={Next}
            >
              Next
            </button>
          </div>
        </div>

        <div className="line"></div>
        <div className="pricing">
          <p>
            PLEASE INPUT ALL THE FIELDS TO <br /> SHOW ESTIMATED PRICE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Framework;
