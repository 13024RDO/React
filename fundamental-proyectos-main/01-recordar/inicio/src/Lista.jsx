import React from 'react'
import { Persona } from './Persona'

export const Lista = ({personas}) => {
  return (
    <section>
        {personas.map((persona)=> {
            return <Persona key={persona.id}{...persona}/>
        })}
    </section>
  )
}
