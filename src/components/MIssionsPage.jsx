import React, { useState } from 'react'

const MISSIONS_STATUSES = ['Unsarted', 'In Progress', 'Completed']

const MissionsPage = () => {

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
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>)}
            </div>
        </div >
    )
}

export default MissionsPage