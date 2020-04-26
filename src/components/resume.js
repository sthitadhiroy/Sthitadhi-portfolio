import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Mainimg from "../Images/pic02.png";

class Resume extends Component {
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
                  height: "400px",
                  width: "400px",
                  borderRadius: "30px",
                }}
              />
            </div>

            <h2 style={{ paddingTop: "2em", textAlign: "center" }}>
              Sthitadhi Roy
            </h2>

            <hr style={{ borderTop: "3px solid #52B994" }} />
            <h5 style={{ textAlign: "center" }}>Address</h5>
            <p style={{ textAlign: "center" }}>
              87/35C Bosepukur Road.Kasba.Kolkata-700 042
            </p>
            <h5 style={{ textAlign: "center" }}>Phone</h5>
            <p style={{ textAlign: "center" }}>(+91) 7278433847</p>
            <h5 style={{ textAlign: "center" }}>Email</h5>
            <p style={{ textAlign: "center" }}>sthitadhi90@gmail.com</p>
            <h5 style={{ textAlign: "center" }}>Web</h5>
            <p style={{ textAlign: "center" }}>mywebsite.com</p>
            <h5 style={{ textAlign: "center" }}>Github</h5>
            <p style={{ textAlign: "center" }}>
              https://github.com/sthitadhiroy
            </p>
            <hr style={{ borderTop: "3px solid #52B994" }} />
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2020}
              schoolName="Amity University"
              schoolDescription="Student of Bachelors in Computer Application."
              schoolDescriptionone="Developed a Android mobile application on startup idea."
              schoolDescriptionsecond="Won a Quiz competition on the Global Blockchain Congress 'Consensus 2018'."
            />

            <hr style={{ borderTop: "3px solid #52B994" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Summer Intership"
              jobDescription="VARA TECHNOLOGY PVT.LTD,KOLKATA"
              jobDescriptionone="Worked on E-Kyc Ethereum platform"
              jobDescriptionsecond="Developed a lottery game by Ethereum Blockchain "
            />
            <Experience
              startYear={2019}
              jobName="Blockchain Developer"
              jobDescription="VARA TECHNOLOGY PVT.LTD,KOLKATA"
              jobDescriptionone="Working on Reactjs and React Native projects"
            />
            <hr style={{ borderTop: "3px solid #52B994" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={60} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="React Js" progress={70} />
            <Skills skill="React Native" progress={65} />

            <hr style={{ borderTop: "3px solid #52B994" }} />
            <h2>Language</h2>
            <Skills skill="English" progress={95} />
            <Skills skill="French" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
