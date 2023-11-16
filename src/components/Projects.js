import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/poject-1.png";
import projImg2 from "../assets/img/project-2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dashboard store",
      description: "React-Tailwindcss ",
      imgUrl: projImg1,
    },
    {
      title: "Clone-whatsapp",
      description: "React-Tailwindcss ",
      imgUrl: projImg2,
    },
    {
      title: "Gym-Website",
      description: "React-css",
      imgUrl: projImg3,
    },
    {
      title: "TodoApp",
      description: "React-css",
      imgUrl: projImg4,
    },
    {
      title: "Gipson",
      description: "Html-css",
      imgUrl: projImg5,
    },
    {
      title: "Poker21",
      description: "javaScript",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Soy un desarrollador web especializado en soluciones digitales a medida. Mi enfoque se centra en crear aplicaciones web atractivas y altamente funcionales que satisfacen las necesidades específicas de mis clientes.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}