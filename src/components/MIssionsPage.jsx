import React, { useState } from 'react'
import MissionList from './MissionsList'


const MISSIONS_STATUSES = ['Unstarted', 'In Progress', 'Completed']

const MissionsPage = (props) => {

    const [missionForm, showMissionForm] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const formToggler = () => {
        showMissionForm(!missionForm)
    }
    const renderMissionsLists = () => {
        const { missions } = props;
        return MISSIONS_STATUSES.map((status, id) => {
            const statusMissions = missions.filter(mission => mission.status === status)
            return (
                <div className="col-md-3 card m-2 p-0" key={id}>
                    <MissionList key={status} status={status} missions={statusMissions} onStatusChange={props.onStatusChange} />
                </div>
            )
        })
    }
    return (
        <div className="container  my-5">
            <div className='jumbotron py-3'>
                <div className='row'>
                    <div className='col-md-2'>
                        <button onClick={formToggler} className='btn btn-success m-3'>
                            Add
                        </button>
                    </div>
                    <div className='col-md-10'>
                        <h2 className='display-4 text-center '>Project Management App</h2>
                    </div>
                </div>
                {missionForm && (
                    < form >
                        <div className='form-group'>
                            <input type='text' className='form-control' placeholder='Mission Title' onChange={onChangeTitle} />
                        </div>
                        <div className='form-group'>
                            <textarea type='text' className='form-control' placeholder='Mission Description' onChange={onDescriptionChange}>
                            </textarea>
                        </div>
                        <button type='submit' className='btn btn-primary'>&#10003;</button>
                    </form>)}
            </div>
            <div className='row d-flex justify-content-center position-relative' style={{ background: '#e9ecef' }}>{renderMissionsLists()}</div>
        </div >
    )
}

export default MissionsPage