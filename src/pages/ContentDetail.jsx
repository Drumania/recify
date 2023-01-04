import React from "react";
import { useParams } from "react-router-dom";

//Fake Api
import { contents } from "../API/api_content";

const ContentDetail = () => {
  let { contentSlug } = useParams();
  const content = contents.find((element) => element.slug == contentSlug);

  return (
    <>
      <div
        className="content-back"
        style={{
          backgroundImage: `url(../src/assets/${content.bigImg})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1>{content.title}</h1>
          <span>{content.duration}</span> - {content.category}
          <br />
          <br />
          <p>{content.sinopsis}</p>
          <a href="#!" className="btn-play">
            &#8227;
          </a>
        </div>
      </div>
    </>
  );
};

export default ContentDetail;
