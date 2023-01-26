import React from 'react'

export default function Students(props) {
    
    const {name, age, city} = props.data; // object destructuring

  return (
    <div>
        <h3>{name} {age} {city}</h3>
        <h1>{props.data.name}</h1>
    </div>
  )
}
