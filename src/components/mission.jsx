import React from 'react'
import { removeMission, editMission } from '../redux/actions';
import { connect } from 'react-redux'



const MISSIONS_STATUSES = ['Unstarted', 'In Progress', 'Completed']


const Mission = (props) => {



    function onStatusChange(e) {
        const id = props.mission.id
        const status = e.target.value
        props.dispatch(editMission(id, { status }))
    }

    const onRemoveMissions = (id) => {
        props.dispatch(removeMission(id))
    }


    return (
        <div>
            <div onClick={() => onRemoveMissions(props.mission.id)} className='float-right m-1' style={{ color: 'tomato', fontSize: '30px', cursor: 'pointer' }}>&#x2717;</div>
            <form onChange={onStatusChange}>
                <select defaultValue={props.mission.status}>
                    {MISSIONS_STATUSES.map(status => (
                        <option value={status} key={status}>{status}</option>
                    ))}
                </select>
            </form >


            <h2 className="cart-title mt-3 text-uppercase px-2" style={{ color: '#3a4' }}>{props.mission.title}</h2>
            <p className="card-text mb-3 text-muted font-weight-bold px-2">{props.mission.description}</p>


        </div>
    )
}

export default connect()(Mission);