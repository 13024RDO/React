import React from 'react'
import {SingleQuestion} from "./SingleQuestion"

export const Question = ({question}) => {
  return (
    <section className='container'>
        <h1>Questions</h1>
      {
        question.map((question) =>{
         return <SingleQuestion key={question.id} {...question}/>
        })
      }
    </section>
  )
}
