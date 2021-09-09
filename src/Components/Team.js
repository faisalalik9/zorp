import React,{useState} from 'react'
import UserCarousel from '../Components/UserCarousel';
import TeamInfo from './TeamInfo';

function Team({teamData}) {





    const[toggle1,setToggle1]= useState(false);
    const[toggle2,setToggle2]= useState(false);

    const length = teamData?.children.length;
     
    function handleClick1(){
        if(toggle1){
            setToggle1(false)
        }
        else{
            setToggle1(true);
        }
    }
    function handleClick2(){
        if(toggle2){
            setToggle2(false)
        }
        else{
            setToggle2(true);
        }
    }

    if(teamData===null){
        return null;
    }
    return (
        <div>
            <h2 className="team-name" onClick={handleClick1}>{teamData?.name}</h2>
            <div className="margin-custom">
                    {toggle1 && <TeamInfo teamInfo={teamData} />}
                    {( toggle1) && <div className={toggle2 ? "view-carousel v-active":"view-carousel"} onClick={handleClick2}>{!toggle2 ? "View Users" :"Close Users"}</div>}
                    {toggle2 && <UserCarousel usersData={teamData?.users} />}
                    {/* {toggle2 && (length===0) && <h3 className="n-u">{toggle1 && "No Users"}</h3>} */}
                    {toggle1 && (length!==0 && length!==undefined)? <h3>Childrens :</h3>:null}
                    <ul className="childs-list">
                    {toggle1 && teamData?.children.map(child=>{
                        return(
                            <li className="child-element"><Team teamData={child} key={child} /></li>
                        )
                    })}
                    </ul>
            </div>
           
        </div>
    )
}

export default Team
