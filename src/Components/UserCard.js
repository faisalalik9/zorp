import React from 'react'
import '../assets/css/UserCard.css'
function UserCard({userData}) {
    return (
        <div className="user-card-main-div">
            <div className="u-c-container">
                 <table>
                    <tbody>
                        <tr>
                            <td className="left-td" colSpan="1">User Id</td>
                            <td className="right-td" colSpan="1">{userData?.userId}</td>
                        </tr>
                        <tr>
                            <td className="left-td" colSpan="1">Name</td>
                            <td className="right-td" colSpan="1">{userData?.name}</td>
                        </tr>
                        <tr>
                            <td className="left-td" colSpan="1">Account Id</td>
                            <td className="right-td" colSpan="1">{userData?.accountId}</td>
                        </tr>
                        <tr>
                            <td className="left-td" colSpan="1">Phone</td>
                            <td className="right-td" colSpan="1">{userData?.phone.num}</td>
                        </tr>
                        <tr>
                            <td className="left-td" colSpan="1">Team ids</td>
                            <td className="right-td" colSpan="1">{userData?.teamIds}</td>
                        </tr>
                         <tr>
                            <td className="left-td" colSpan="1">Role</td>
                            <td className="right-td" colSpan="1">{userData?.role}</td>
                        </tr>
                         <tr>
                            <td className="left-td" colSpan="1">Is Active</td>
                            <td className="right-td" colSpan="1">{userData?.isActive ? "True" : "False"}</td>
                        </tr>
                        <tr>
                            <td className="left-td" colSpan="1">Status</td>
                            <td className="right-td" colSpan="1">{userData?.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserCard
