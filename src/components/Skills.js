import React from 'react';
import Slider from 'react-slick';
import cs from "../assets/img/color-sharp.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import diseño1 from "../assets/img/figma.png";
import diseño2 from "../assets/img/photoshop.png";
import diseño3 from "../assets/img/ilustrador.png";
import front1 from "../assets/img/html.png";
import front2 from "../assets/img/css.png";
import front3 from "../assets/img/js.png";
import front4 from "../assets/img/react.png";
import front5 from "../assets/img/tpys.png";
import front6 from "../assets/img/tw.png";
import front7 from "../assets/img/Bootstrap.png";
import back1 from "../assets/img/js.png";
import back2 from "../assets/img/nodejs.png";
import back3 from "../assets/img/express-js.png";

const skillItems = [
  { image: diseño1, title: 'Figma', porcentaje: '0%' },
  { image: diseño2, title: 'Adobe Photoshop', porcentaje: '0%'  },
  { image: diseño3, title: 'Adobe Illustrator', porcentaje: '0%'  },
  { image: front1, title: 'HTML', porcentaje: '0%'  },
  { image: front2, title: 'CSS', porcentaje: '0%'  },
  { image: front3, title: 'JavaScript', porcentaje: '5%'  },
  { image: front4, title: 'React', porcentaje: '0%'  },
  { image: front5, title: 'TypeScript', porcentaje: '0%'  },
  { image: front6, title: 'Tailwind CSS', porcentaje: '0%'  },
  { image: front7, title: 'Bootstrap CSS', porcentaje: '0%'  },
  { image: back1, title: 'JavaScript', porcentaje: '0%'  },
  { image: back2, title: 'Node JS', porcentaje: '0%'  },
  { image: back3, title: 'Express', porcentaje: '0%'  },
];

export const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de elementos a mostrar
    slidesToScroll: 1, // Número de elementos a desplazar
    autoplay: true, // Hace que el carrusel sea automático
    autoplaySpeed: 3000, // Ajusta la velocidad del carrusel en milisegundos
    centerMode: true, // Activa el modo centrado
    centerPadding: '0', // Ajusta el espacio entre elementos
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className='sk'>Skills</h2>

              {/* Sección de Diseño */}
              <h3 className='h3-'>Diseño</h3>
              <Slider {...settings} className='crs'>
                {skillItems.slice(0, 3).map((item, index) => (
                  <div className="item" key={index}>
                    <img src={item.image} alt="Image" className="small-image" />
                    <p className="percentage">{item.porcentaje}</p>
                    <p className="skill-title">{item.title}</p>
                  </div>
                ))}
              </Slider>

              {/* Sección de Front-End */}
              <h3 className='h3-'>Front-End</h3>
              <Slider {...settings} className='crs'>
                {skillItems.slice(3, 10).map((item, index) => (
                  <div className="item" key={index}>
                    <img src={item.image} alt="Image" className="small-image" />
                    <p className="percentage">{item.porcentaje}</p>
                    <p className="skill-title">{item.title}</p>
                  </div>
                ))}
              </Slider>

              {/* Sección de Back-End */}
              <h3 className='h3-'>Back-End</h3>
              <Slider {...settings} className='crs'>
                {skillItems.slice(10, 13).map((item, index) => (
                  <div className="item" key={index}>
                    <img src={item.image} alt="Image" className="small-image" />
                    <p className="percentage">{item.porcentaje}</p>
                    <p className="skill-title">{item.title}</p>
                  </div>
                ))}
              </Slider>
              {/* <img src={cs} alt="Image" className="small-img" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
