import React from "react";
import useData from "../Contexts/data";
import { Link } from "react-router-dom";

function ArticleCards(prop) {
  
  // console.log(prop.id)
  return (
    <div class="w-72 h-40 flex flex-col justify-center gap-2 bg-slate-700 rounded-lg shadow p-2">
      <div class="flex gap-2">
        <img src="https://images.unsplash.com/photo-1526599256864-6bedb9d7dfb5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="bg-purple-200 w-24 h-24 shrink-0 rounded-lg" />
        <div class="flex flex-col text-white">
          <span class="font-bold italic">{prop.title}</span>
          <p class="line-clamp-3">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
        dolor augue. Nunc dictum erat sit amet iaculis interdum. Ut neque
        tellus, congue vel lectus aliquam, dignissim porttitor velit. */}

            {prop.info}
          </p>
        </div>
      </div>
      <Link to="/articles/k">
      <button 
        prop = {prop}
        class="hover:bg-purple-300 bg-neutral-50 font-bold text-indigo-500 rounded p-2"
       
      >
        See more
      </button>
      </Link>
    </div>
  );
}

export default ArticleCards;
