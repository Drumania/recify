import React from "react";
import { useParams } from "react-router-dom";
import ThumbMovie from "../components/ThumbMovie";

//Fake Api
import { movies } from "../API/api_movie";

const Category = () => {
  let { categoryId } = useParams();

  return (
    <>
      <h3>{categoryId}</h3>
      <div className="wrap-thumbs">
        {movies.map(
          (element) =>
            element.category === categoryId && (
              <ThumbMovie
                key={element.id}
                bigImg={element.bigImg}
                slug={`../${element.slug}`}
                title={element.title}
              />
            )
        )}
      </div>
    </>
  );
};

export default Category;
