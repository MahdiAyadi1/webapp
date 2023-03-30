import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import { Tab } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import Tooltip from "@mui/material/Tooltip";

const Metroinfo = (props) => {
  const [value, setValue] = useState("1");
  // const [props.filtre, props.setFiltre] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLineChange = (event) => {
    const selectedLine = event.target.value;
    if (event.target.checked) {
      props.setFiltre([...props.filtre, selectedLine]);
    } else {
      props.setFiltre(props.filtre.filter((line) => line !== selectedLine));
    }
  };
  props.setFiltre(props.filtre)

  return (
    <div className="metroinfo">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} textColor="inherit">
            <Tab label="Metro List" value="1" />
            <Tab label="Filters" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className="metroinfo--items">
          <Tooltip title="Show Position">
            <div>
              {" "}
              <RoomIcon /> Metro 401
            </div>
          </Tooltip>
          <Tooltip title="Show Position">
            <div>
              {" "}
              <RoomIcon /> Metro 402
            </div>
          </Tooltip>
        </TabPanel>
        <TabPanel value="2">
          <div>
            <input
              type="checkbox"
              value="1"
              checked={props.filtre.includes("1")}
              onChange={handleLineChange}
            />
            Line 1
          </div>
          <div>
            <input
              type="checkbox"
              value="2"
              checked={props.filtre.includes("2")}
              onChange={handleLineChange}
            />
            Line 2
          </div>
          <div>
            <input
              type="checkbox"
              value="3"
              checked={props.filtre.includes("3")}
              onChange={handleLineChange}
            />
            Line 3
          </div>
          <div>
            <input
              type="checkbox"
              value="4"
              checked={props.filtre.includes("4")}
              onChange={handleLineChange}
            />
            Line 4
          </div>
          <div>
            <input
              type="checkbox"
              value="5"
              checked={props.filtre.includes("5")}
              onChange={handleLineChange}
            />
            Line 5
          </div>
          <div>
            <input
              type="checkbox"
              value="6"
              checked={props.filtre.includes("6")}
              onChange={handleLineChange}
            />
            Line 6
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};
export default Metroinfo;
