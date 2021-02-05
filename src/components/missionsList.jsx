import React from 'react'
import Mission from './Mission'

const MissionList = (props) => {
    return (
        <div>
            <div className='card-header text-uppercase text-center font-weight-bold '>
                {props.status}
            </div>
            <div>
                {props.missions.map(mission => (
                    <Mission key={mission.id} mission={mission}  />
                ))}
            </div>
        </div>
    )
}

export default MissionList
