import React, {useEffect, useState} from 'react'
import axios from 'axios'



function StaffDetails() {

    const[data, setData] = useState([])

    useEffect( ()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
        }, [])
    return (
        
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>

                <tbody>
                   {
                    data.map( (user, index) => {
                        return <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>


                            </tr>
                    })
                   }
                </tbody>
            </table>
        </div>
        
    )
}

export default StaffDetails