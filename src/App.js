import "./App.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useEffect } from "react";

const getServerDetails = async() => {

}

const getServerCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

function App() {

  const [servers, setServer] = useState([])

  useEffect(() => {
    getServerDetails(setServer)
  }, [])

  return (
    <div className="App">
      <div className="header">
        <img className="title-img" src="Pink Brush Stroke.png" alt="background"/>
        <div className="title-main">Hater</div>
        <div className="title-sub">
          The Hate Speech Detection and Tracking Discord Bot
        </div>
      </div>

      <div className="body-page1">
        <div className="body-page1-heading">Servers Under Survelliance</div>
        <hr />

        <div className="body-page1-serverlist">
          {getServerCard()}
        </div>
      </div>
    </div>
  );
}

export default App;
