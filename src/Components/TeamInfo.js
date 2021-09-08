import React from 'react'

function TeamInfo({teamInfo}) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Type</td>
                        <td>{teamInfo?.type}</td>
                    </tr>
                    <tr>
                        <td>Team Id</td>
                        <td>{teamInfo?.teamId}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{teamInfo?.name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TeamInfo
