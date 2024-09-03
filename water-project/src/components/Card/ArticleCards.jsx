import React from 'react'

function ArticleCards({title} , para) {
    console.log(title)
  return (
<div
  class="w-72 h-40 flex flex-col justify-center gap-2 bg-slate-700 rounded-lg shadow p-2"
>
  <div class="flex gap-2">
    <img alt="" class="bg-purple-200 w-24 h-24 shrink-0 rounded-lg" />
    <div class="flex flex-col text-white">
      <span class="font-bold italic">{title}</span>
      <p class="line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
        dolor augue. Nunc dictum erat sit amet iaculis interdum. Ut neque
        tellus, congue vel lectus aliquam, dignissim porttitor velit.
      </p>
    </div>
  </div>
  <button
    class="hover:bg-purple-300 bg-neutral-50 font-bold text-indigo-500 rounded p-2"
  >
    See more
  </button>
</div>

  )
}

export default ArticleCards