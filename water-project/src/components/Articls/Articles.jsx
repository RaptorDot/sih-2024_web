import React from 'react'
import ArticleCards from '../Card/ArticleCards'
import useData from '../Contexts/data'


export default function Articles() {
  // console.log(useData())
  return (
    <div className='items-center place-items-center'>
     {useData().map((e)=>(
      <div>
        <ArticleCards key={e.id} id={e.id} info ={e.info} title={e.title}/>
        <hr/>
      </div>
     ))}
    </div>
  )
}
