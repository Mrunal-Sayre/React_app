import React, { useState, useEffect } from 'react'
import User from './User';
import axios from 'axios';  

export default function UserListing(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
     axios.get('https://reqres.in/api/users?page=2')  
      .then(res => {  
        console.log(res.data.data[0].email);
      })  
  });

    function showData(){
        fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(res => {
          // console.table(res.data)
          var records = res.data;
          var rows = [];
          for(let i = 0; i< records.length; i++){
            rows.push(<User data={{id: records[i].id, name:records[i].first_name + "" + records[i].last_name, email:records[i].email, avatar: records[i].avatar }}/>)
            // rows.push(records[i])
          }
          setUsers(rows);
        })
      }
    
  return (
    <>
        <button onClick={showData}>Show Data</button>
        <User data = {{id:"1", name:"Mrunal", email:"mrunal@gmail.com", avatar:"https://reqres.in/img/faces/9-image.jpg"}} />
        {users}
{/* 
        <div>
            ===================================================
            <table border='1'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Avatar</th>
                            </tr>
            {
                users.map((val) => {
                    console.log(val.email)
                    return(
                        
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td><img src = {val.avatar} /></td>
                            </tr>
                        

                    )
                })
                
            }
            
            </table>
                        
        </div> */}
    </>
  )
}
