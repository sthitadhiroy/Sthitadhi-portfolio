import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={4} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#1B1B1B",
                height: "176px",
                background:
                  "url(https://cdn-media-1.freecodecamp.org/images/Cw7jNVIhWFV4NSNY8-Lv8uX4583Hr5LvzYFq) center / cover",
              }}
            >
              Calculator
            </CardTitle>
            <CardText>Demo Calculator with html,css and javascript.</CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <div style={{ padding: 10 }} />
          <Card shadow={4} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#1B1B1B",
                height: "176px",
                background:
                  "url(https://cdn.dribbble.com/users/42176/screenshots/3818218/accordion-plan.gif) center / cover",
              }}
            >
              Music App
            </CardTitle>
            <CardText>
              Demo music app with with html,css and javascript.
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <div style={{ padding: 10 }} />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={4} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjsexample.com/content/images/2017/06/tmdb-demo.gif) center / cover",
              }}
            >
              Movie Searching App
            </CardTitle>
            <CardText>
              Demo Movie-series search app with Reactjs with a free api.
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <div style={{ padding: 10 }} />
          <Card shadow={4} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#1B1B1B",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/2400/1*gFHOND9q4UHWUCLzRAooog.gif) center / cover",
              }}
            >
              COVID19 Tracker
            </CardTitle>
            <CardText>Demo COVID19 tracker with an open api.</CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <div style={{ padding: 10 }} />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={4} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#1B1B1B",
                height: "176px",
                background:
                  "url(https://images.squarespace-cdn.com/content/v1/556ea5c8e4b081da85e406c7/1525160461885-RZ87D877PMW0RDQ6EI8U/ke17ZwdGBToddI8pDm48kJbosy0LGK_KqcAZRQ_Qph1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzkC6kmM1CbNgeHQVxASNv0wiXikHv274BIFe4LR7nd1rKmAka4uxYMJ9FupazBoaU/Airbnb_SpringBreak_Okinawa_MarkConlan.gif) center / cover",
              }}
            >
              mPlantation
            </CardTitle>
            <CardText>
              Demo startup idea of selling plants build by react native.{" "}
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <div style={{ padding: 10 }} />
          <Card shadow={4} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#1B1B1B",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/originals/01/62/4a/01624a1b21d9557f45667802439c2589.gif) center / cover",
              }}
            >
              Know Your Horse
            </CardTitle>
            <CardText>
              Quiz app about horses, questions are fetched from a sample
              hardcoded json.
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <div style={{ padding: 10 }} />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shadow={4} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#1B1B1B",
                height: "176px",
                background:
                  "url(https://media1.tenor.com/images/5e5bca279ef6dac0cddeaa1bd3a3a7f8/tenor.gif?itemid=12970572) center / cover",
              }}
            ></CardTitle>
            <CardText>Cloud Computing And Associated Security issue.</CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <div style={{ padding: 10 }} />
          <Card shadow={4} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#1B1B1B",
                height: "176px",
                background:
                  "url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/b74e9e59938257.5a3510875edd4.gif) center / cover",
              }}
            ></CardTitle>
            <CardText>A Study on Web Data Mining.</CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <div style={{ padding: 10 }} />
          <Card shadow={4} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#1B1B1B",
                height: "176px",
                background:
                  "url(https://thumbs.gfycat.com/ScaryDiligentGrunion-max-1mb.gif) center / cover",
              }}
            ></CardTitle>
            <CardText>
              A study on blockchain platform ethereum as a part of summer
              internship.
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "#1B1B1B", height: "100%" }}>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "white" }}>Javascript</Tab>
          <Tab style={{ color: "white" }}>ReactJS</Tab>
          <Tab style={{ color: "white" }}>ReactNative</Tab>
          <Tab style={{ color: "white" }}>Research</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
