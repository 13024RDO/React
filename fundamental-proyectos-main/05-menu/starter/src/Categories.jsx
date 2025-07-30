import React from 'react'

export const Categories = ({categories, filterItems}) => {
  return (
    <div className="btn-container">
        {
            categories.map((categories)=>{
                return (
                    <button
                    className='btn'
                    onClick={()=> filterItems(categories)}
                    key={categories}
                    type='button'
                    >
                     {categories}
                    </button>
                )
            })
        }
    </div>
  )
}
