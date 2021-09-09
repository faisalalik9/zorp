import React,{useState} from 'react'
import UserCard from '../Components/UserCard';
import { FaArrowCircleLeft,FaArrowCircleRight } from 'react-icons/fa';
import { FiArrowLeftCircle,FiArrowRightCircle } from 'react-icons/fi';


function UserCarousel({usersData}) {

    var index = 0;
    const[current,setCurrent]=useState(0);
    const length = usersData?.length;

    console.log(length);

    function handleClickLeft(){
         setCurrent(current===0 ? 0: current - 1);
    }
    function handleClickRight(){
         setCurrent(current===length-1 ? length-1: current + 1);
    }


    if(length===0 || length===undefined){
        return null;
    }

    return (
        <div className="user-carousel">
                <div className="user-carousel-container">
                    <div className="left-btn" onClick={handleClickLeft}>
                        {current===0 ? <FiArrowLeftCircle /> : <FaArrowCircleLeft />}
                    </div>
                    {usersData?.map(user=>{
                        index++;
                        return(
                            <div className={index===current+1 ? "user-card active": "user-card"}>
                                {index===current+1 && <UserCard userData={user}/>}
                            </div>
                        )
                        
                    })
                    }

                    <div className="right-btn" onClick={handleClickRight}>
                        {current===length-1 ? <FiArrowRightCircle /> : <FaArrowCircleRight />}
                    </div> 

                </div>
        </div>
    )
}

export default UserCarousel
