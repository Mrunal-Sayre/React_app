import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <div>

        <h1>Navigation</h1>
        <Link to={'/'} style={{marginRight: "20px"}}>Addition</Link>
        <Link to={'/sub'} style={{marginRight: "20px"}}>Substraction</Link>
        <Link to={'/mul'}>Multiplication</Link>

    </div>
  )
}
