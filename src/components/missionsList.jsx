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
<<<<<<< HEAD
                    <Mission key={mission.id} mission={mission} />
=======
                    <Mission key={mission.id} mission={mission}  />
>>>>>>> 65938c9efe40de130db851ac247163b39a9f79e7
                ))}
            </div>
        </div>
    )
}

export default MissionList
