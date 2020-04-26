import React, { Component } from "react";
import { Grid, Cell, Button, Navigation } from "react-mdl";
import Particles from "react-particles-js";
import Typed from "react-typed";
import { navigate } from "@reach/router";

class Landing extends Component {
  submitResume() {
    navigate("/resume");
  }

  render() {
    return (
      <div className="landing-grid">
        <Particles />
        <Grid>
          <Cell col={12}>
            <div style={{ position: "fixed", top: "50%", left: "50%" }}>
              <Button
                style={{
                  minWidth: "350px",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  padding: "10%",
                  boxSizing: "border-box",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 24,
                }}
              >
                <Typed
                  href="/resume"
                  strings={["Hi I'm Sthitadhi Roy."]}
                  typeSpeed={40}
                />
              </Button>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
