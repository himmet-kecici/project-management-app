import editMission from './utils'
import Types from './types'

const initialState = [

]

const missions = (state = { missions: initialState }, action) => {
    const { payload } = action;
    switch (action.type) {
        case Types.EDIT_MISSION: {
            return {
                missions: editMission(state, payload)
            }
        }
        case Types.CREATE_MISSION: {
            return {

                missions: state.missions.concat(payload)
            }
        }
        case Types.REMOVE_MISSION: {
            return {
                missions: state.missions.filter(mission => mission.id !== action.id)
            }
        }
        default: return state
    }
}


export default missions;
