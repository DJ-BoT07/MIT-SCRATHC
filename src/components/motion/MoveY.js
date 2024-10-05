import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@mui/material/Paper";

// Move Component for Sidebar
const MoveY = ({ character, comp_id }) => {
  const [steps, setSteps] = useState(0);

  // Function used for moving character in Y direction
  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    if (el) {
      // Get the current position of the element
      const currentPosition = el.offsetTop;
      el.style.position = "relative";
      el.style.top = currentPosition + steps + "px";
    }
  };

  // Handle input changes
  const handleStepsChange = (e) => {
    const value = e.target.value;

    // Check if value is a valid number
    if (!isNaN(value) && value.trim() !== "") {
      setSteps(parseInt(value, 10));
    } else {
      setSteps(0); // Reset to zero if invalid
    }
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={handleClick}
      >
        Move Y{" "}
        <input
          type="number"
          className="text-black text-center w-16 mx-2"
          value={steps}
          onChange={handleStepsChange}
        />{" "}
        steps
      </div>
    </Paper>
  );
};

// Mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(MoveY);
