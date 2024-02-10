import React from "react";
import { useParams } from "react-router-dom";

//Fake Api
import { contents } from "../API/api_content";

const ContentDetail = () => {
  let { contentSlug } = useParams();
  const content = contents.find((element) => element.slug == contentSlug);

  return (
    <>
      <video width="320" height="240" poster={`${content.bigImg}`} controls>
        <source src={`videos/${content.video}`} type="video/mp4" />
      </video>
      <div
        className="content-back"
        style={{
          backgroundImage: `url(${content.bigImg})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div>
        <h1>{content.title}</h1>
        <span>{content.duration}</span> - {content.category}
        <br />
        <br />
        <p>{content.sinopsis}</p>
      </div>
    </>
  );
};

export default ContentDetail;
