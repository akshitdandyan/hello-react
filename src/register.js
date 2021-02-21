import { useEffect, useState } from "react";
function Register() {
    const [rname, setRname] = useState("")
    const [remail, setRemail] = useState("")

    function registerUser() {
        let data = {
            rname,
            remail
                   }
            console.warn("INFO ",data);
        }
    
    return (
        <div>
            <h1>Register with name and email</h1>
            <input id="rname" type="text" onChange={(n) => setRname(n.target.value)} value={rname} placeholder="Enter name" />
            <br />
            <br />
            <input id="remail" type="email" onChange={(e) => setRemail(e.target.value)} value={remail} placeholder="Enter email" />
            <br />
            <br />
            <button type="submit" onClick={registerUser}>Register User</button>

        </div>
    )
}
export default Register;