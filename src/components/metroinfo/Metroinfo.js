import React from "react";
import './metroinfo.css' ;
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Box from '@mui/material/Box';
import { Tab } from "@mui/material";
import  {useState} from "react"
import RoomIcon from '@mui/icons-material/Room';
import Tooltip from '@mui/material/Tooltip';


const Metroinfo = ()=> {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <div className="metroinfo">

    <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor="inherit">
            <Tab label="Metro List" value="1" />
            <Tab label="Filters" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className="metroinfo--items">
        <Tooltip title="Show Position"><div>  <RoomIcon/> Metro 401</div></Tooltip>
        <Tooltip title="Show Position"><div>  <RoomIcon/> Metro 402</div></Tooltip>
        </TabPanel>
        <TabPanel value="2" >
            <div><input type="checkbox"/>Line 1</div>
            <div><input type="checkbox"/>Line 2</div>
            <div><input type="checkbox"/>Line 3</div>
            <div><input type="checkbox"/>Line 4</div>
            <div><input type="checkbox"/>Line 5</div>
            <div><input type="checkbox"/>Line 6</div>
        </TabPanel>
      </TabContext>
        </div>
    )
}
export default Metroinfo