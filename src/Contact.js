import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
function Contact() {
    const [employee, setEmployee] = useState([
        { ename: 'Newbie', age: 29472383 },
        { ename: 'Noobster', age: 22332384 },
        { ename: 'Noob', age: 29339235 },
    ])

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       employee.map((item,index)=><tr key={index}>
                       <td>{index}</td>
                       <td>{item.ename}</td>
                       <td>{item.age}</td>
                         </tr>)
                   }
                    
                </tbody>
            </Table>
        </>
    )
}
export default Contact;