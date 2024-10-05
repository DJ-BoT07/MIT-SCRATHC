import React from "react";
// import Move from "./motion/Move";
// import TurnAntiClockwise from "./motion/TurnAntiClockwise";
// import TurnClockwise from "./motion/TurnClockwise";
// import GotoXY from "./motion/Goto";
// import Wait from "./control/Wait";
// import Repeat from "./control/Repeat";
import MoveY from "./motion/MoveY";

export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE_Y":
      return <MoveY comp_id={id} />;
    // case "MOVE":
    //   return <Move comp_id={id} />;

    // case "TURN_CLOCKWISE":
    //   return <TurnClockwise comp_id={id} />;

    // case "TURN_ANTI_CLOCKWISE":
    //   return <TurnAntiClockwise comp_id={id} />;

    // case "GOTO_XY":
    //   return <GotoXY comp_id={id} />;

    // case "WAIT":
    //   return <Wait comp_id={id} />;

    // case "REPEAT":
    //   return <Repeat comp_id={id} />;

    default:
      return null;
  }
};
