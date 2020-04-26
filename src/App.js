import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterLinkList,
  FooterSection,
} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "10px",
                }}
                to="/"
              >
                Sthitadhi Roy
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            style={{
              backgroundColor: "#1B1B1B",
              color: "#ffffffea",
              borderColor: "#1B1B1B",
            }}
            title={
              <Link style={{ textDecoration: "none", color: "#52B994" }} to="/">
                Sthitadhi Roy
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer className="footer-color">
            <FooterSection
              type="right"
              logo="Copyright 2020 Sthitadhi Roy. All Rights Reserved."
            ></FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
