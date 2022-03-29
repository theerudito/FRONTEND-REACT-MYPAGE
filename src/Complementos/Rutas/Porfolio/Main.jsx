import React, { useState } from "react";
import { MainCardPost } from "./PostPorfolio";
import Post from "../Porfolio/Post.json";

console.log(Post);

export const MainPorfolio = () => {
  const [post0, setPost0] = useState([
    Post[0].post0.title,
    Post[0].post0.urlrepositorio,
    Post[0].post0.image,
    Post[0].post0.urlpage,
  ]);

  const [post1, setPost1] = useState([
    Post[1].post1.title,
    Post[1].post1.urlrepositorio,
    Post[1].post1.image,
    Post[1].post1.urlpage,
  ]);

  const [post2, setPost2] = useState([
    Post[2].post2.title,
    Post[2].post2.urlrepositorio,
    Post[2].post2.image,
    Post[2].post2.urlpage,
  ]);

  const [post3, setPost3] = useState([
    Post[3].post3.title,
    Post[3].post3.urlrepositorio,
    Post[3].post3.image,
    Post[3].post3.urlpage,
  ]);

  const [post4, setPost4] = useState([
    Post[4].post4.title,
    Post[4].post4.urlrepositorio,
    Post[4].post4.image,
    Post[4].post4.urlpage,
  ]);

  const [post5, setPost5] = useState([
    Post[5].post5.title,
    Post[5].post5.urlrepositorio,
    Post[5].post5.image,
    Post[5].post5.urlpage,
  ]);

  const [post6, setPost6] = useState([
    Post[6].post6.title,
    Post[6].post6.urlrepositorio,
    Post[6].post6.image,
    Post[6].post6.urlpage,
  ]);

  return (
    <>
      <div id="tituloprincipal">
        <h5 id="titulo1">Proyectos Realizados</h5>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <MainCardPost
              titulo={post0[0]}
              url={post0[1]}
              image={post0[2]}
              page={post0[3]}
            />
          </div>
          <div className="carousel-item">
            <MainCardPost
              titulo={post1[0]}
              url={post1[1]}
              image={post1[2]}
              page={post1[3]}
            />
          </div>
          <div className="carousel-item">
            <MainCardPost
              titulo={post2[0]}
              url={post2[1]}
              image={post2[2]}
              page={post2[3]}
            />
          </div>

          <div className="carousel-item">
            <MainCardPost
              titulo={post3[0]}
              url={post3[1]}
              image={post3[2]}
              page={post3[3]}
            />
          </div>

          <div className="carousel-item">
            <MainCardPost
              titulo={post4[0]}
              url={post4[1]}
              image={post4[2]}
              page={post4[3]}
            />
          </div>

    

          <div className="carousel-item">
            <MainCardPost
              titulo={post5[0]}
              url={post5[1]}
              image={post5[2]}
              page={post5[3]}
            />
          </div>

          <div className="carousel-item">
            <MainCardPost
              titulo={post6[0]}
              url={post6[1]}
              image={post6[2]}
              page={post6[3]}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
