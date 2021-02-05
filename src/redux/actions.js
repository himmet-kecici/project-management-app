import Types from './types'
import { v4 as uuidv4 } from 'uuid';

export const editMission = (id, params = {}) => ({
    type: Types.EDIT_MISSION,
    payload: {
        id,
        params
    }
})

export const createMission = ({ title, description }) => ({
    type: Types.CREATE_MISSION,
    payload: {
        id: uuidv4(),
        title,
        description,
        status: 'Unstarted'

    }
})

export const removeMission = (id) => ({
    type: Types.REMOVE_MISSION,
    id
})