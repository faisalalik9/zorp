import React from 'react'
import UserCard from '../Components/UserCard';

function UserCarousel({usersData}) {
    return (
        <div className="user-carousel">
                <div className="user-carousel-container">
                    {usersData?.map(user=>{
                        return(
                            <UserCard userData={user}/>
                        )
                        
                    })
                        
                    }
                </div>
        </div>
    )
}

export default UserCarousel
