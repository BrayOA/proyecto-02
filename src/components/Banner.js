import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/bray.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/instagram.svg';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Bienvenidos a mi Portafolio</span>
                  <h1>
                    {`Hola soy Bayan`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  Como diseñador UI y desarrollador front-end, me especializo en crear experiencias visuales atractivas y funcionales. Combino creatividad y habilidades técnicas para diseñar e implementar interfaces de usuario eficientes, con el objetivo de mejorar la experiencia del usuario."
                  </p>
                  <a
                    className="cv"
                    href="https://drive.google.com/uc?export=download&id=1zXjGcjNaFsJ2-Xo6EQJTRKoS9Lrzef5h"
                    download="Currículumbrayan.pdf"
                    style={{ textDecoration: "none" }}
                  >
                    <button className="downloadcv">
                      Descargar CV <ArrowRightCircle size={25} />
                    </button>
                  </a>
                  <div className="social-icon">
                <a className="1" href="https://www.linkedin.com/in/brayan-cristhian-112b69186/"><img src={navIcon1} alt="" /></a>
                <a className="1" href="https://github.com/BrayOA"><img src={navIcon2} alt="" /></a>
                <a className="1" href="https://twitter.com/BrayOrconA"><img src={navIcon3} alt="" /></a>
                <a className="1" href="https://www.instagram.com/brayoa01/"><img src={navIcon4} alt="" /></a>
              </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="bray-img-c">
                  <img src={headerImg} alt="Header Img" className="bray-img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
