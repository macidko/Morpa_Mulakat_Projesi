import React from "react";
import "./abacus.css";
import "./bead.css";
import { useSelector } from "react-redux";
import { selectCount } from "../../redux/reducers/counterReducer";

function Beads({ id }) {
  // Select the count value from the Redux store based on the provided id
  const groups = useSelector((state) => selectCount(state, id));
    
  // Create an array based on the 'groups' count
  const beadArray = Array.from({ length: groups }, (_, i) => (
    <div key={i} className="bead"></div>
  ));

  return (
    <div className="line">
      {/* Render the bead array */}
      {beadArray}
    </div>
  );
}

export default Beads;
