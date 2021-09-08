import React from 'react'
import UserCarousel from '../Components/UserCarousel';
import TeamInfo from './TeamInfo';

function Team({teamData}) {

    console.log(teamData);
    return (
        <div>
            <TeamInfo teamInfo={teamData} />
            <UserCarousel usersData={teamData?.users} />
            <h5>Children</h5>
            {teamData?.children.map(child=>{
                return(
                    <Team teamData={child} />
                )
            })}
        </div>
    )
}

export default Team
