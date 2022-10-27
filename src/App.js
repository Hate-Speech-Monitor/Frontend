import "./App.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import { useEffect } from "react";

const getServerDetails = async (handler) => {
  let data = await fetch("http://127.0.0.1:5000/getGuilds");
  data = await data.json();
  handler(data.data);
};

const getServerCard = (server) => {
  let iconAvatar;
  if(server.icon) {
    iconAvatar = <Avatar alt={server.name} src={server.icon} sx={{ width: 56, height: 56 }} />
  } else {
    iconAvatar = <Avatar sx={{ width: 56, height: 56 }}>{server.name[0]}</Avatar>
  }
  return (
    <Card elevation={3}>
      <CardContent>
        <div className="server-icon">
          {iconAvatar}
        </div>
        <Typography sx={{ fontSize: 30 }} color="text.primary" gutterBottom>
          {server.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          #{server.guild_id}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 20 }}>
          Offenders : {server.offenders}/{server.members}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">View Details</Button>
      </CardActions>
    </Card>
  );
};

function App() {
  const [servers, setServer] = useState([]);

  useEffect(() => {
    getServerDetails(setServer);
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img
          className="title-img"
          src="Pink Brush Stroke.png"
          alt="background"
        />
        <div className="title-main">Hater</div>
        <div className="title-sub">
          The Hate Speech Detection and Tracking Discord Bot
        </div>
      </div>

      <div className="body-page1">
        <div className="body-page1-heading">Servers Under Survelliance</div>
        <hr />

        <div className="body-page1-serverlist">
          <Grid sx={{ flexGrow: 1 }} container spacing={5} justifyContent="center">
            {servers.map((server) => {
              return (
                <Grid item xs={4} minWidth="400px">
                  {getServerCard(server)}
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
