import React from 'react'
import ArticleCards from '../Card/ArticleCards'
import useData from '../Contexts/data'


export default function Articles() {
  // console.log(useData())
  return (
    // <div className='items-center place-items-center'>
    //  {useData().map((e)=>(
    //   <div>
        // <ArticleCards key={e.id} id={e.id} info ={e.info} title={e.title}/>
    //     <hr/>
    //   </div>
    //  ))}
    // </div>
    <div className="max-w-6xl mx-auto p-6">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Articles</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* {useData().map(article => (
        <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.info}</p>
            <p className="text-gray-500 text-sm">{article.date}</p>
            <a href={`/articles/${article.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Read More
            </a>
          </div>
        </div>
      ))} */}
      {useData().map((e)=>(
       <div key={e.id}>
       
         <ArticleCards info ={e.info} image={e.image} title={e.title}/>
         <hr/>
       </div>
        ))}
    </div>
  </div>
  )
}
