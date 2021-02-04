import React from 'react'

const MISSIONS_STATUSES = ['Unstarted', 'In Progress', 'Completed']


const Mission = (props) => {

    function onStatusChange(e) {
        props.onStatusChange(props.mission.id, e.target.value)
    }

    return (
        <div>
            <form onChange={onStatusChange}>
                <select defaultValue={props.mission.status}>
                    {MISSIONS_STATUSES.map(status => (
                        <option value={status} key={status}>{status}</option>
                    ))}
                </select>
            </form>


            <h2 className="cart-title mt-3 text-uppercase px-2" style={{ color: '#3a4' }}>{props.mission.title}</h2>
            <p className="card-text mb-3 text-muted font-weight-bold px-2">{props.mission.description}</p>
        </div>
    )
}

export default Mission;