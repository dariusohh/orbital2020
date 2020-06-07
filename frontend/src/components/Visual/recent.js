import React from 'react'
import './visual.css';

export const Recent= ({transaction}) => {
  

    return (
    <div className='recent'> {transaction.created_at.slice(0,10)} : {transaction.name}   </div>
  
    )
}