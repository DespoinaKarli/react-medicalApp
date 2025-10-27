import React from "react";
import calendar from "../assets/images";
const header = () => {
  return (
    <div>
      <div>
        <h1>Hello,Doctor!</h1>
      </div>
      <div>
        <p>Do not forget to submit you desired schedule.</p>
        <img src={calendar} alt="calendar icon" />
      </div>
    </div>
  );
};

export default header;
