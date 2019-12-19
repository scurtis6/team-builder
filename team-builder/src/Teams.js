import React from 'react';

const Teams = props => {
    console.log(props);
    return(
        <div className="team-list">
            {props.teamMember.map(team => (
                <div className="team" key={team.id}>
                    <h2>{team.name}</h2>
                    <p>{team.email}</p>
                    <p>{team.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Teams;