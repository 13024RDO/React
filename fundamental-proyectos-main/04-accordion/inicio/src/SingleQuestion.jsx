import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <article>
      <header>
        <h1>{title}</h1>
        <button
          className='question-btn'
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}
