import React from "react";
import { useParams } from "react-router-dom";
import ThumbContent from "../components/ThumbContent";

//Fake Api
import { contents } from "../API/api_content";

const Category = () => {
  let { categoryId } = useParams();

  return (
    <>
      <h3>{categoryId}</h3>
      <div className="wrap-thumbs">
        {contents.map(
          (element) =>
            element.category === categoryId && (
              <ThumbContent
                id={element.id}
                bigImg={element.bigImg}
                slug={element.slug}
                title={element.title}
                director={element.director}
              />
            )
        )}
      </div>
    </>
  );
};

export default Category;
