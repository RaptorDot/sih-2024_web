import React from 'react'
import ArticleCards from '../Card/ArticleCards'
import useData from '../Contexts/data'


export default function Articles() {
  // console.log(useData())
  return (
    <div>
     {useData().map((e)=>(
      <ArticleCards key={e.id} info ={e.info} title={e.title}/>
     ))}
    </div>
  )
}
