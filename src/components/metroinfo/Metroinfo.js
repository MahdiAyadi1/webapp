import React, { useState, useEffect } from "react";
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
import './metroinfo.css'
import { getDocs, collection, deleteDoc, doc} from "firebase/firestore";
import { db } from "../../firebase-config";
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
  const [metropositions,setmetropositions] = useState([])
  const metroCollectionRef = collection(db,"metro_mouvement") 
  useEffect(() => {
    const getmetropositions = async () => {
      const data = await getDocs(metroCollectionRef);
      setmetropositions(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      console.log(metropositions)
    };
    getmetropositions();
  }, []);
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
          {metropositions.map((val) => {  return (
            // <Tooltip title="Show Position" onClick={()=>{props.setFocus(val.location)}}>
              
            <div>
              {" "}
              <RoomIcon /> Metro {val.id_metro}
            </div>
            // </Tooltip>
            )
          }) }
        </TabPanel>
        <TabPanel value="2">
          <div className="input_box">
            <input
              type="checkbox"
              value="1"
              checked={props.filtre.includes("1")}
              onChange={handleLineChange}
            />
            Line 1
            <img src={station1Img} style={{width: 20,marginLeft: 13}}/>
          </div>
          <div className="input_box">
            <input
              type="checkbox"
              value="2"
              checked={props.filtre.includes("2")}
              onChange={handleLineChange}
            />
            Line 2
            <img src={station2Img} style={{width: 20,marginLeft: 13}}/>
          </div>
          <div className="input_box">
            <input
              type="checkbox"
              value="3"
              checked={props.filtre.includes("3")}
              onChange={handleLineChange}
            />
            Line 3
            <img src={station3Img} style={{width: 20,marginLeft: 13}}/>
          </div>
          <div className="input_box">
            <input
              type="checkbox"
              value="4"
              checked={props.filtre.includes("4")}
              onChange={handleLineChange}
            />
            Line 4
            <img src={station4Img} style={{width: 20,marginLeft: 13}}/>
          </div>
          <div className="input_box">
            <input
              type="checkbox"
              value="5"
              checked={props.filtre.includes("5")}
              onChange={handleLineChange}
            />
            Line 5 
            <img src={station5Img} style={{width: 20,marginLeft: 13}}/>
          </div>
          <div className="input_box">
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
