import React, { useState } from 'react'
import MissionList from './MissionsList'
import { connect } from 'react-redux'
import { createMission } from '../redux/actions';




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

    const resetForm = () => {
        setTitle('')
        setDescription('')
        showMissionForm(false)
    }


    const onCreateMissions = (e) => {
        e.preventDefault()
        props.dispatch(createMission({
            title, description
        }))
        resetForm()
    }
    const renderMissionsLists = () => {
        const { missions } = props;
        return MISSIONS_STATUSES.map((status, id) => {
            const statusMissions = missions.filter(mission => mission.status === status)
            return (
                <div className="col-md-3 card m-2 p-0" key={id}>
                    <MissionList key={status} status={status} missions={statusMissions} />
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
                    < form onSubmit={onCreateMissions}>
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

const mapStateToProps = state => ({
    missions: state.missions
})

export default connect(mapStateToProps)(MissionsPage)