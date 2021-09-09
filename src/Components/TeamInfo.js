import React from 'react'
import '../assets/css/TeamInfo.css'

function TeamInfo({teamInfo}) {
    return (
        <div className="t-info-main-div">
            <table>
                <tbody>
                    <tr>
                        <td className="ltd">Type</td>
                        <td className="rtd">{teamInfo?.type}</td>
                    </tr>
                    <tr>
                        <td className="ltd">Team Id</td>
                        <td className="rtd">{teamInfo?.teamId}</td>
                    </tr>
                    <tr>
                        <td className="ltd">Name</td>
                        <td className="rtd">{teamInfo?.name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TeamInfo
