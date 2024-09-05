import React from "react";
import useData from "../Contexts/data";
import { Link } from "react-router-dom";

function ArticleCards(prop) {
  // console.log(prop.id)
  return (
    <div className="w-72 h-40 flex flex-col justify-center gap-2 bg-slate-700 rounded-lg shadow p-2">
      <div className="flex gap-2">
        <img
          src={prop.image}
          alt=""
          className="bg-purple-200 w-24 h-24 shrink-0 rounded-lg"
        />
        <div className="flex flex-col text-white">
          <span className="font-bold italic">{prop.title}</span>
          <p className="line-clamp-3">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
        dolor augue. Nunc dictum erat sit amet iaculis interdum. Ut neque
        tellus, congue vel lectus aliquam, dignissim porttitor velit. */}

            {prop.info}
          </p>
        </div>
      </div>
      <Link to="/articles/k" state={{ data: prop }}>
        {/* {console.log(prop)} */}
        <button
          key={prop.id}
          className="hover:bg-purple-300 bg-neutral-50 font-bold text-indigo-500 rounded p-2"
        >
          See more
        </button>
      </Link>
    </div>
  );
}

export default ArticleCards;
