import React from 'react'
import UserCard from '../Components/UserCard';

function UserCarousel({usersData}) {

    function handleClickLeft(){
        document.querySelectorAll(".user-card").style.margin=0;
    }


    return (
        <div className="user-carousel">
                <div className="user-carousel-container">
                    <div className="left-btn" onClick={handleClickLeft}>
                        Left
                    </div>
                    {usersData?.map(user=>{
                        return(
                            <div className="user-card">
                                <UserCard userData={user}/>
                            </div>
                        )
                        
                    })
                    }

                    <div className="right-btn">
                        Right
                    </div> 

                </div>
        </div>
    )
}

export default UserCarousel
