import './styles.css';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Enmarcación from '../Enmarcacion';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="dashboard-container">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Enmarcación" {...a11yProps(0)} />
            <Tab label="Retablo" {...a11yProps(1)} />
            <Tab label="Bastidor" {...a11yProps(2)} />
            <Tab label="Espejo" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Enmarcación />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Retablo
        </TabPanel>
        <TabPanel value={value} index={2}>
          Bastidor
        </TabPanel>
        <TabPanel value={value} index={3}>
          Espejo
        </TabPanel>
      </Box>
    </div>
  );
}

export default Dashboard;
