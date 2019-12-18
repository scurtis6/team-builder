import React, {useState} from 'react';
import logo from './logo.svg';
import Forms from './Forms';
import Teams from "./Teams"
import './App.css';

function App() {
  const [teamMembers, setTeamMemebers] = useState([
    {
      name: "Sierra Curtis",
      email: "sierracurtis91@gmail.com",
      role: "Web Developer"
    }
  ]);
  const addNewTeamMember = member => {
    const NewTeamMember = {
      // id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMemebers([...teamMembers, NewTeamMember]);
  };
  return (
    <div className="App">
      <h1>My Team</h1>
      <Forms addNewTeamMember={addNewTeamMember}/>
      <Teams teamMembers={teamMembers} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
