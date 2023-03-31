import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import { Tab } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import Tooltip from "@mui/material/Tooltip";
import station1Img from '../leafletmap/station1.png'
import station2Img from '../leafletmap/station2.png'
import station3Img from '../leafletmap/station3.png'
import station4Img from '../leafletmap/station4.png'
import station5Img from '../leafletmap/station5.png'
import station6Img from '../leafletmap/station6.png'
import { width } from "@mui/system";

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
            <img src={station1Img} style={{width: 20,marginLeft: 13}}/>
          </div>
          <div>
            <input
              type="checkbox"
              value="2"
              checked={props.filtre.includes("2")}
              onChange={handleLineChange}
            />
            Line 2
            <img src={station2Img} style={{width: 20,marginLeft: 13}}/>
          </div>
          <div>
            <input
              type="checkbox"
              value="3"
              checked={props.filtre.includes("3")}
              onChange={handleLineChange}
            />
            Line 3
            <img src={station3Img} style={{width: 20,marginLeft: 13}}/>
          </div>
          <div>
            <input
              type="checkbox"
              value="4"
              checked={props.filtre.includes("4")}
              onChange={handleLineChange}
            />
            Line 4
            <img src={station4Img} style={{width: 20,marginLeft: 13}}/>
          </div>
          <div>
            <input
              type="checkbox"
              value="5"
              checked={props.filtre.includes("5")}
              onChange={handleLineChange}
            />
            Line 5 
            <img src={station5Img} style={{width: 20,marginLeft: 13}}/>
          </div>
          <div>
            <input
              type="checkbox"
              value="6"
              checked={props.filtre.includes("6")}
              onChange={handleLineChange}
            />
            Line 6
            <img src={station6Img} style={{width: 20,marginLeft: 13}}/>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};
export default Metroinfo;
