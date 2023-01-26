import React from 'react'

export default function User(props) {
    const {id, email, name, avatar} = props.data;
  return (
    <div>
    <table border='1'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Avatar</th>
        </tr>
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td><img src = {avatar} /></td>
        </tr>
       

    </table>
    
    </div>
  )
}
