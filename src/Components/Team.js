import React,{useState} from 'react'
import UserCarousel from '../Components/UserCarousel';
import TeamInfo from './TeamInfo';

function Team({teamData}) {

    const[toggle1,setToggle1]= useState(false);

     
    function handleClick1(){
        console.log("hello");
        if(toggle1){
            setToggle1(false)
        }
        else{
            setToggle1(true);
        }
    }

    console.log(teamData);
    return (
        <div>
            <h3 onClick={handleClick1}>{teamData?.name}</h3>
            {toggle1 && <TeamInfo teamInfo={teamData} />}
            {toggle1 &&  <UserCarousel usersData={teamData?.users} />}
           
            
            {toggle1 && teamData?.children.map(child=>{
                return(
                    <Team teamData={child} />
                )
            })}
        </div>
    )
}

export default Team
