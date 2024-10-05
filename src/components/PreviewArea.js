import React, { useState } from "react";
import CatSprite from "./CatSprite";
import { connect } from "react-redux";
import { addCharacter, setActive } from "./redux/character/actions";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
}));

const ButtonStyled = styled(Button)({
  margin: 0,
});

function PreviewArea({ character, add_character, set_active }) {
  const [active, setActive] = useState(character.active);
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  let elmnt = null;

  function dragMouseDown(e, id) {
    elmnt = document.getElementById(id);
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  const handleChange = (e) => {
    setActive(e.target.value);
    set_active(e.target.value);
  };

  const handlePlay = () => {
    // Add play functionality here
    console.log("Play button clicked");
  };

  return (
    <div
      className="w-full flex-none h-full overflow-y-auto p-3"
      id="preview_area"
    >
      <div className="flex justify-between mb-10">
        <div className="font-bold mb-5 text-center border border-2 rounded text-white bg-green-400 p-2 w-auto">
          Preview Area
        </div>
        <div>
          <FormControlStyled>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Active
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={active}
              onChange={handleChange}
              displayEmpty
            >
              {character.characters.map((x, i) => {
                const name = x.id.charAt(0).toUpperCase() + x.id.slice(1);
                return (
                  <MenuItem key={i} value={x.id}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControlStyled>
        </div>
        <div className="flex space-x-2">
          <ButtonStyled
            variant="contained"
            color="primary"
            startIcon={<PlayArrowIcon />}
            onClick={handlePlay}
          >
            Play
          </ButtonStyled>
          <ButtonStyled
            variant="contained"
            color="secondary"
            startIcon={<AddCircleIcon />}
            onClick={add_character}
          >
            Create
          </ButtonStyled>
        </div>
      </div>
      <div className="flex justify-around h-full">
        {character.characters.map((x, i) => (
          <div
            id={`${x.id}-${i}`}
            key={i}
            className={`absolute`}
            onMouseDown={(e) => dragMouseDown(e, `${x.id}-${i}`)}
          >
            <div className="character">
              <CatSprite charac_id={x.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_character: () => dispatch(addCharacter()),
    set_active: (ch_id) => dispatch(setActive(ch_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewArea);
