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

    const submitHandler = e => {
        e.preventDefault()
        const newMember = {
            ...member, id: Date.now(),
        }
        props.addNewTeamMember(newMember);
        setMember({name: "", email: "", role: ""})
    }
    return (
        <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name: </label>
            <input 
            id="name"
            type='text'
            name="name"
            placeholder='Enter name'
            onChange={handleChanges}
            value={member.name}
             />
             <label htmlFor="email">Email: </label>
             <input
             id="email"
             type="text"
             name="email"
             placeholder="Enter email"
             onChange={handleChanges}
             value={member.email} />
             <label>Role: </label>
                 <input
                 id="rolw"
                 type="text"
                 name="role"
                 placeholder="Enter role"
                 onChange={handleChanges}
                 value={member.role} />
             <button type="submit">Add New Member</button>
        </form>
        </div>
    )
}

export default Forms;