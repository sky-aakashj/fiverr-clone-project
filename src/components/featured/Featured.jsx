import React, { useState } from "react";
import "./Featured.scss";

const Featured = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleRemoveInput = () => {
    setInput("");
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="searchicon" />
              <input
                onChange={(e) => handleInputChange(e)}
                value={input}
                type="text"
                placeholder='Try "building mobil app"'
              />
              {input && (
                <img
                  src="./img/remove.png"
                  className="removeImg"
                  onClick={handleRemoveInput}
                  alt="remove icon"
                />
              )}
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Polular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="man" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
