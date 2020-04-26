import React, { Component } from "react";
import { Grid, Cell, List, Button, Textfield } from "react-mdl";
import Mainimg from "../Images/pic03.png";

class Contact extends Component {
  render() {
    return (
      <div
        style={{ width: "100%", margin: "auto", backgroundColor: "#1b1b1b" }}
      >
        <Grid>
          <Cell className="resume-right-col" col={12}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Mainimg}
                alt="avatar"
                style={{ height: "250px", borderRadius: "30px" }}
              />

              <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                Feel free to get in touch. Cheers!
              </p>
              <h2>Contact Me</h2>
              <hr />
              <div style={{ alignContent: "center" }}>
                <div
                  style={{
                    minWidth: "100px",
                    width: "100%",
                    height: "100%",

                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    padding: "5%",
                    boxSizing: "border-box",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 24,
                  }}
                >
                  <Textfield
                    onChange={() => {}}
                    label="Name"
                    floatingLabel
                    style={{ width: "200px" }}
                  />
                  <div style={{ padding: 10 }} />
                  <Textfield
                    onChange={() => {}}
                    label="Email"
                    floatingLabel
                    style={{ width: "200px" }}
                  />
                  <div style={{ padding: 10 }} />
                  <Textfield
                    onChange={() => {}}
                    label="Designation"
                    floatingLabel
                    style={{ width: "200px" }}
                  />
                  <div style={{ padding: 10 }} />
                  <Textfield
                    onChange={() => {}}
                    label="Advice..!!"
                    rows={3}
                    style={{ width: "200px" }}
                  />
                  <div style={{ padding: 10 }} />
                  <Button raised colored>
                    Catch up !!
                  </Button>
                </div>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
