import React, {useState} from "react";

const Forms = props => {
    console.log(props)
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value});
        console.log(e.target)
    }
    return (
        <form>
            <label htmlFor="name">Name: </label>
            <input 
            id="name"
            type='text'
            placeholder='Enter name'
            onChange={handleChanges}
             />
             <label htmlFor="email">Email: </label>
             <input
             id="email"
             type="text"
             placeholder="Enter email"
             onChange={handleChanges} />
             <label>Role: 
                 <input
                 type="text"
                 placeholder="Enter role"
                 onChange={handleChanges} />
             </label>
        </form>
    )
}

export default Forms;