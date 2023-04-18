import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../data";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>My name is Milena, I'm an Integrated Engineering student at the University of British Columbia. In my studies I focus on Mechanical and Computer engineering, which allows me to combine my passions for aerospace engineering and computer programming. <br /><br /> I am driven by a passion for learning, which is why I have continued growing my skills by joining design teams, such as UBC Rocket and UBC Mars Colony, and working on design projects which integrate software and hardware sensor components to deliver stakeholder-driven solutions. <br /><br />My experience ranges from object-oriented programming in Python and C++, front-end development in React and React Native (leveraging JavaScript and CSS), and embedded programming in C on Arduino microcontroller systems. I also have experience working with Linux systems from previous internships and design projects. Throughout my time in aerospace I have also familiarized myself with TC and FAA guidelines surrounding design compliance of aircraft systems (i.e.: DO-178C, CARs Part 5, AC 43.13-1b). <br /><br />I enjoy working in fast-paced, motivated & team-oriented environments. I'm passionate about leveraging multifaceted engineering principles to develop innovative solutions and I'm excited to continue learning and creating!</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `100%`,
                      }}
                    >
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
