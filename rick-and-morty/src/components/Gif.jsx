import React from 'react'

export const Gif = ({data}) => {

  return (
     <div className="characters">
        <h1 className="title">
            Personajes
        </h1>
        <div className="container-characters">
           {
            data.map((personaje)=>(
                <div className="character-card" key={personaje.id}>
                    <div className="">
                        <img src={personaje.image} alt={personaje.name} />
                        <div className="">
                            <h3>{personaje.name}</h3>
                            <h6>
                                {
                                    personaje.status === "Alive" ? (
                                        <span className='Alive'>Alive</span>
                                    ) : (
                                         <span className='Dead'>Dead</span>
                                    )
                                }
                            </h6>
                            <p>
                                <span>Episodio: </span>
                                <span>{personaje.episode.length}</span>
                            </p>
                            <p>
                                <span>Especie: </span>
                                <span>{personaje.species}</span>
                            </p>
                            <p>
                                <span>Gender: </span>
                                <span>{personaje.gender}</span>
                            </p>
                        </div>
                    </div>
                </div>
                 
            ))
           }
        </div>
        <br />
        <hr />
        <span className="back-home">Volver A Inicio</span>
     </div>
  )
}
