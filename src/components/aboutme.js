import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Mainimg from "../Images/pic04.png";

class About extends Component {
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
                style={{
                  height: "250px",
                  width: "350px",
                  borderRadius: "30px",
                }}
              />
            </div>

            <h2 style={{ paddingTop: "2em", textAlign: "center" }}>
              Sthitadhi Roy
            </h2>

            <hr style={{ borderTop: "3px solid #52B994" }} />
            <p style={{ fontSize: 24, padding: 20 }}>
              My name is Sthitadhi Roy. I'm an BCA student at Amity
              University,Kolkata Information Technology Department. I was born
              and raised in Kolkata. I did my schools from Nava Nalanda High
              School.
              <br />
              <br />
              I had a summer internship at Vara Technology and currently working
              as a blockchain developer at the Vara Technology pvt ltd .
              <br />
              <br />I like theatre and football. I believe theatre gives a new
              perspective to everything. You get to know a lot about the
              different cultures, their history, the language and all the small
              unique things every thing has to offer.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
